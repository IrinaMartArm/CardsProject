import { useEffect } from 'react'

import { AddNewDeckDialog } from '@/components/ui/modals/dialogs/AddNewDeckDialog'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { Preloader } from '@/components/ui/preloader'
import { Typography } from '@/components/ui/typography/Typography'
import { useDecksSearchParams } from '@/features/decks/hooks/useDecksSearchParams'
import { DecksFilters } from '@/features/decks/ui/DecksFilters'
import { DecksTable } from '@/features/decks/ui/DecksTable'
import { useMeQuery } from '@/services/auth/auth.service'
import {
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useGetMinMaxCardsQuery,
} from '@/services/decks/decks.service'
import { CreateDeckArgs } from '@/services/decks/decks.types'

import s from './decks.module.scss'

export const Decks = () => {
  const {
    debouncedSearch,
    itemsPerPage,
    maxCardsCount,
    minCardsCount,
    name,
    orderBy,
    page,
    setName,
    setOrderBy,
    setSearchParametersHandler,
    sortedString,
    tab,
  } = useDecksSearchParams()
  const { data: me } = useMeQuery()

  const { data, error, isLoading } = useGetDecksQuery(
    {
      authorId: tab === 'my' ? me?.id : '',
      currentPage: page,
      itemsPerPage: itemsPerPage,
      maxCardsCount,
      minCardsCount,
      name: debouncedSearch,
      orderBy: sortedString,
    }
    // { skip: skip }
  )
  const [deleteDeck, { isLoading: isDeckBeingDeleted }] = useDeleteDeckMutation()

  const [createDeck] = useCreateDeckMutation()
  const { data: sliderData, isLoading: isSliderLoading } = useGetMinMaxCardsQuery()
  const currentUserId = me?.id

  useEffect(() => {
    if (sliderData) {
      setSearchParametersHandler('minCardsCount', String(sliderData?.min))
      setSearchParametersHandler('maxCardsCount', String(sliderData?.max))
    }
  }, [sliderData])

  const onDeleteClick = (id: string) => {
    deleteDeck({
      id: id,
    })
  }
  const onAddDeckHandler = (data: CreateDeckArgs) => {
    createDeck(data)
    setSearchParametersHandler('page', '1')
  }

  const onFiltersReset = () => {
    setSearchParametersHandler('minCardsCount', String(sliderData?.min))
    setSearchParametersHandler('maxCardsCount', String(sliderData?.max))
    setSearchParametersHandler('searchValue', '')
    setSearchParametersHandler('tab', 'all')
    setName('')
  }

  if (isLoading || isSliderLoading || !sliderData) {
    return <Preloader size={100} />
  }

  if (error) {
    return <h2>Error: {JSON.stringify(error)}</h2>
  }

  return (
    <div className={s.root}>
      <div className={s.title}>
        <Typography variant={'h1'}>Decks list</Typography>
        <AddNewDeckDialog onAddDeck={onAddDeckHandler} />
      </div>
      <DecksFilters
        decks={data}
        maxCardsCount={maxCardsCount}
        minCardsCount={minCardsCount}
        onChange={setName}
        onChangeFilter={setSearchParametersHandler}
        onFiltersReset={onFiltersReset}
        originMaxCount={sliderData.max}
        tab={tab}
        value={name}
      />
      <DecksTable
        currentUserId={currentUserId}
        decks={data}
        disabled={isDeckBeingDeleted}
        onDeleteClick={onDeleteClick}
        onSort={setOrderBy}
        orderBy={orderBy}
      />
      <div className={s.pagination}>
        <Pagination
          currentPage={data?.pagination.currentPage || 1}
          onFilterChange={setSearchParametersHandler}
          pageSize={+itemsPerPage}
          siblingCount={1}
          totalCount={data?.pagination.totalPages || 1}
        />
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
