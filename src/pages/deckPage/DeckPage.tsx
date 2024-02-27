import { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'

import { Button, Input, Typography } from '@/components/ui'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { CardsTable } from '@/pages/deckPage/CardsTable'
import { useGetDeckByIdQuery, useGetDeckCardsQuery } from '@/services/decks/decks.service'

export const DeckPage = () => {
  const { deckId } = useParams()
  const [currentPage, setCurrentPage] = useState(1)
  const { data: deckData } = useGetDeckByIdQuery({ id: deckId || '' })
  const { data: cardsData } = useGetDeckCardsQuery({ id: deckId || '' })
  const [searchParams, setSearchParams] = useSearchParams()

  const learnLink = `/decks/${deckId}/learn`

  const setSearchParametersHandler = (key: string, value: string) => {
    searchParams.set(key, value)
    setSearchParams(searchParams)
  }

  return (
    <div>
      <Typography variant={'h2'}>{deckData?.name}</Typography>
      <Button as={Link} to={learnLink}>
        Learn
      </Button>
      <Input placeholder={'Search cards'} type={'search'} />
      <CardsTable cards={cardsData?.items} />
      <Pagination
        currentPage={currentPage}
        onFilterChange={setSearchParametersHandler}
        onPageChange={p => setCurrentPage(p)}
        pageSize={10}
        siblingCount={1}
        totalCount={cardsData?.pagination?.totalPages || 1}
      />
    </div>
  )
}
