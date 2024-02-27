import { useEffect, useMemo, useState } from 'react'
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
  useGetMinMaxCardsQuery,
} from '@/services/decks/decks.service'

import s from './decks.module.scss'

export const Decks = () => {
  // const [skip, setSkip] = useState(true)
  const [name, setName] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [searchParams, setSearchParams] = useSearchParams()

  const orderBy = JSON.parse(searchParams.get('orderBy') ?? 'null')
  const maxCardsCount = Number(searchParams.get('maxCardsCount'))
  const minCardsCount = Number(searchParams.get('minCardsCount'))
  const page = Number(searchParams.get('page')) || currentPage
  const itemsPerPage = searchParams.get('itemsPerPage') ?? '10'
  const setOrderBy = (value: Sort) => {
    searchParams.set('orderBy', JSON.stringify(value))
    setSearchParams(searchParams)
  }

  const setSearchParametrHandler = (key: string, value: string) => {
    console.log(key, value)
    searchParams.set(key, value)
    setSearchParams(searchParams)
  }

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
      itemsPerPage: Number(itemsPerPage),
      maxCardsCount,
      minCardsCount,
      name: debouncedSearch,
      orderBy: sortedString,
    }
    // { skip: skip }
  )
  const { data: me } = useMeQuery()
  const { data: sliderData, isLoading: isSliderLoading } = useGetMinMaxCardsQuery()
  const currentUserId = me?.id

  useEffect(() => {
    if (sliderData) {
      setSearchParametrHandler('minCardsCount', String(sliderData?.min))
      setSearchParametrHandler('maxCardsCount', String(sliderData?.max))
    }
  }, [sliderData])

  console.log(sliderData)
  const [createDeck] = useCreateDeckMutation()

  const onDeleteClick = (id: string) => {
    deleteDeck({
      id: id,
    })
  }
  const onsetPage = (page: number) => setCurrentPage(page)

  if (isLoading || isSliderLoading || !sliderData) {
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
          onChangeFilter={setSearchParametrHandler}
          originMaxCount={sliderData.max}
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
            onFilterChange={setSearchParametrHandler}
            onPageChange={onsetPage}
            pageSize={+itemsPerPage}
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
