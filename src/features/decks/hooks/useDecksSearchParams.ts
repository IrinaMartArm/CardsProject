import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Sort } from '@/components/ui/tables/TableHeader'
import { useDebounce } from '@/hooks/useDebounce'

export const useDecksSearchParams = () => {
  // const [skip, setSkip] = useState(true)
  const [name, setName] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const orderBy = JSON.parse(searchParams.get('orderBy') ?? 'null')
  const setOrderBy = (value: Sort) => {
    searchParams.set('orderBy', JSON.stringify(value))
    setSearchParams(searchParams)
  }
  const maxCardsCount = Number(searchParams.get('maxCardsCount'))
  const minCardsCount = Number(searchParams.get('minCardsCount'))
  const page = Number(searchParams.get('page')) || 1
  const itemsPerPage = searchParams.get('itemsPerPage') ?? '10'

  const setSearchParametersHandler = (key: string, value: string) => {
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

  return {
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
  }
}
