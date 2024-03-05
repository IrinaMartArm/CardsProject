import { ChangeEvent, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { useDebounce } from '@/hooks/useDebounce'
import { useMeQuery } from '@/services/auth/auth.service'
import { useGetDeckCardsQuery } from '@/services/cards/cards.service'
import { useGetDeckByIdQuery } from '@/services/decks/decks.service'

export const useDeckSearchParams = () => {
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

  const disabled = isDeckData && isCardsData

  const currentUserId = me?.id

  const inputSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    setSearch(value)
    setSearchParametersHandler('searchValue', value)
  }
  const isOwner = deckData?.userId === me?.id

  return {
    cardsData,
    currentUserId,
    deckData,
    deckId,
    disabled,
    inputSearchHandler,
    isOwner,
    search,
    setSearchParametersHandler,
  }
}
