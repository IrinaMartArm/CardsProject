import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { AddNewDeckDialog } from '@/components/ui/modals/dialogs/AddNewDeckDialog'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { Sort } from '@/components/ui/tables/TableHeader'
import { Typography } from '@/components/ui/typography/Typography'
import { DecksFilters } from '@/features/decks/ui/DecksFilters'
import { DecksTable } from '@/features/decks/ui/DecksTable'
import { useDebounce } from '@/hooks/useDebounce'
import { useMeQuery } from '@/services/auth/auth.service'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
} from '@/services/decks/decks.service'

import s from './decks.module.scss'

export const Decks = () => {
  // const [skip, setSkip] = useState(true)
  const [name, setName] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()

  const orderBy = JSON.parse(searchParams.get('orderBy') ?? 'null')
  const maxCardsCount = Number(searchParams.get('maxCardsCount')) || 100
  const minCardsCount = Number(searchParams.get('minCardsCount')) || 1
  const page = Number(searchParams.get('page')) || 1
  const setOrderBy = (value: Sort) => {
    searchParams.set('orderBy', JSON.stringify(value))
    setSearchParams(searchParams)
  }

  // const setMaxCardsCount = (maxValue: number) => {
  //   searchParams.set('max', JSON.stringify(maxValue))
  //   setSearchParams(searchParams)
  // }
  // const setMinCardsCount = (minValue: number) => {
  //   searchParams.set('max', JSON.stringify(minValue))
  //   setSearchParams(searchParams)
  // }

  const onChangeFilter = (key: string, value: string) => {
    console.log(key, value)
    searchParams.set(key, JSON.stringify(value))
    setSearchParams(searchParams)
  }

  // const onSkipChange = () => {
  //   setSkip(false)
  // }

  const sortedString = useMemo(() => {
    if (!orderBy) {
      return null
    }

    return `${orderBy.key}-${orderBy.direction}`
  }, [orderBy])

  const debouncedSearch = useDebounce(name, 1000)
  const [deleteDeck, { isLoading: isDeckBeingDeleted }] = useDeleteDeckMutation()
  const { data, error, isLoading } = useGetDecksQuery(
    {
      currentPage: page,
      name: debouncedSearch,
      orderBy: sortedString,
    }
    // { skip: skip }
  )
  const { data: me } = useMeQuery()
  const currentUserId = me?.id

  const [createDeck] = useCreateDeckMutation()

  // const onAddDeck = () => {
  //   createDeck({ name: 'yo🦋' })
  // }

  const onDeleteClick = (id: string) => {
    deleteDeck({
      id: id,
    })
  }
  const onsetPage = (page: number) => setCurrentPage(page)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>Error: {JSON.stringify(error)}</h2>
  }

  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <div className={s.title}>
          <Typography variant={'h1'}>Decks list</Typography>
          <AddNewDeckDialog onAddDeck={data => createDeck(data)} />
        </div>
        <DecksFilters
          decks={data}
          maxCardsCount={maxCardsCount}
          minCardsCount={minCardsCount}
          onChange={setName}
          onChangeFilter={onChangeFilter}
          value={name}
        />
        <DecksTable
          currentUserId={currentUserId}
          decks={data}
          disabled={isDeckBeingDeleted}
          onDeleteClick={onDeleteClick}
          onEditClick={() => {}}
          onSort={setOrderBy}
          orderBy={orderBy}
        />
        <div className={s.pagination}>
          <Pagination
            currentPage={data?.pagination.currentPage || 1}
            onFilterChange={onChangeFilter}
            onPageChange={onsetPage}
            pageSize={data?.pagination.totalItems || 10}
            siblingCount={1}
            totalCount={data?.pagination.totalPages || 1}
          />
        </div>
      </div>
    </div>
  )
}

// const handleSort = (key: string) => {
//   if (orderBy && orderBy.key === key) {
//     setSort({
//       direction: orderBy.direction === 'asc' ? 'desc' : 'asc',
//       key,
//     })
//   } else {
//     setSort({
//       direction: 'asc',
//       key,
//     })
//   }
// }
