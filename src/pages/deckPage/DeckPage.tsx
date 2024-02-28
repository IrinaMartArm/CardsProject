import { ChangeEvent, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import { ArrowLeft } from '@/components/assets/icons'
import { Button, Input, Page, Typography } from '@/components/ui'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { useDebounce } from '@/hooks/useDebounce'
import { CardsTable } from '@/pages/deckPage/CardsTable'
import { useMeQuery } from '@/services/auth/auth.service'
import { useGetDeckByIdQuery, useGetDeckCardsQuery } from '@/services/decks/decks.service'

import s from './DeckPage.module.scss'

export const DeckPage = () => {
  const { deckId } = useParams()
  const [search, setSearch] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const debounceSearch = useDebounce(search, 1000)
  const setSearchParametersHandler = (key: string, value: string) => {
    searchParams.set(key, value)
    setSearchParams(searchParams)
  }

  const currentPage = Number(searchParams.get('page') || '1')
  const itemsPerPage = Number(searchParams.get('itemsPerPage') || '10')
  const orderBy = JSON.parse(searchParams.get('orderBy') ?? 'null')

  const { data: me } = useMeQuery()
  const { data: deckData, isLoading: isDeckData } = useGetDeckByIdQuery({ id: deckId || '' })
  const { data: cardsData, isLoading: isCardsData } = useGetDeckCardsQuery({
    currentPage: currentPage,
    id: deckId || '',
    itemsPerPage: itemsPerPage,
    orderBy: orderBy,
    question: debounceSearch,
  })

  // console.log('deck', deckData)
  // console.log('cards', cardsData)

  const disabled = isDeckData && isCardsData

  const currentUserId = me?.id

  const inputSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    console.log(value)
    setSearch(value)
    setSearchParametersHandler('searchValue', value)
  }

  return (
    <Page>
      <div className={s.root}>
        <Button as={Link} className={s.backBtn} icon={<ArrowLeft />} to={'/'} variant={'link'}>
          <Typography variant={'body2'}>Back to Decks List</Typography>
        </Button>
        <div className={s.title}>
          <Typography variant={'h1'}>{deckData?.name}</Typography>
          <Button as={Link} to={`/decks/${deckId}/learn`}>
            Learn
          </Button>
        </div>
        <img alt={''} src={deckData?.cover} width={50} />
        <Input
          name={'search'}
          onChange={inputSearchHandler}
          placeholder={'Search cards'}
          type={'search'}
          value={search}
        />
        <CardsTable cards={cardsData?.items} currentUserId={currentUserId} disabled={disabled} />
        <Pagination
          currentPage={cardsData?.pagination.currentPage || 1}
          onFilterChange={setSearchParametersHandler}
          pageSize={cardsData?.pagination.itemsPerPage || 10}
          siblingCount={1}
          totalCount={deckData?.cardsCount || 1}
        />
      </div>
    </Page>
  )
}
