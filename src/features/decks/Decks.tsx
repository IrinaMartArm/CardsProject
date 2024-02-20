import { useMemo, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/header/Header'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { Sort } from '@/components/ui/tables/TableHeader'
import { Typography } from '@/components/ui/typography/Typography'
import { DecksFilters } from '@/features/decks/DecksFilters'
import { DecksTable } from '@/features/decks/DecksTable'
import { useDebounce } from '@/hooks/useDebounce'
import { useGetDecksQuery } from '@/services/Api'

import s from './decks.module.scss'

export const Decks = () => {
  const [search, setSearch] = useState('')
  const [orderBy, setOrderBy] = useState<Sort | null>(null)

  const sortedString = useMemo(() => {
    if (!orderBy) {
      return null
    }

    return `${orderBy.key}-${orderBy.direction}`
  }, [orderBy])

  const debouncedSearch = useDebounce(search, 1000)

  const { data, error, isLoading } = useGetDecksQuery({
    name: debouncedSearch,
    orderBy: sortedString,
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>Error: {JSON.stringify(error)}</h2>
  }

  return (
    <div className={s.root}>
      <Header name={'Bob'} />
      <div className={s.wrapper}>
        <div className={s.title}>
          <Typography variant={'h1'}>Decks list</Typography>
          <Button variant={'primary'}>
            <Typography variant={'subtitle2'}>Add New Deck</Typography>
          </Button>
        </div>
        <DecksFilters onChange={setSearch} search={search} />
        <DecksTable data={data} orderBy={orderBy} setOrderBy={setOrderBy} />
        <div className={s.pagination}>
          <Pagination
            currentPage={1}
            onPageChange={() => {}}
            pageSize={10}
            siblingCount={1}
            totalCount={50}
          />
        </div>
      </div>
    </div>
  )
}
// const [params, setParams] = useSearchParams()
//
// const orderBy = JSON.parse(params.get('orderBy'))
// const setOrderBy = (value: Sort) => {
//   params.set(orderBy, JSON.stringify(value))
// }
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
