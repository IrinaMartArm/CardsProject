import { ChangeEvent, useMemo, useState } from 'react'

import { TrashBin } from '@/components/assets/icons'
import { Button } from '@/components/ui/button'
import { CheckBox } from '@/components/ui/checkBox'
import { Header } from '@/components/ui/header/Header'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination/Pagination'
import { Slider } from '@/components/ui/slider/Slider'
import { Table } from '@/components/ui/tables/Table'
import { Sort, TableHeader } from '@/components/ui/tables/TableHeader'
import { Tabs } from '@/components/ui/tabs/Tabs'
import { Typography } from '@/components/ui/typography/Typography'
import { CreateNewPassword } from '@/features/auth'
import { useDebounce } from '@/hooks/useDebounce'
import { useGetDecksQuery } from '@/services/Api'

import s from './decks.module.scss'

export type Column = {
  key: string
  sortable?: boolean
  title: string
}
export const columns: Column[] = [
  {
    key: 'name',
    sortable: true,
    title: 'Name',
  },
  {
    key: 'cardsCount',
    sortable: true,
    title: 'Cards',
  },
  {
    key: 'updated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'createdBy',
    sortable: true,
    title: 'Created by',
  },
  {
    key: '',
    sortable: false,
    title: '',
  },
]
const tabOptions = [
  { disabled: false, option: 'My Cards' },
  { disabled: false, option: 'All Cards' },
]

export const Decks = () => {
  const [search, setSearch] = useState('')
  const [orderBy, setOrderBy] = useState<Sort | null>(null)

  const sortedString = useMemo(() => {
    if (!orderBy) {
      return null
    }

    return `${orderBy.key}-${orderBy.direction}`
  }, [orderBy])

  const debouncedSearch = useDebounce(search, 500)

  const { data, error, isLoading } = useGetDecksQuery({
    name: debouncedSearch,
    orderBy: sortedString,
  })

  const onSearchChanfeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value)
    setSearch(event.currentTarget.value)
  }

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
        <div className={s.filters}>
          <Input
            className={s.input}
            onChange={onSearchChanfeHandler}
            type={'search'}
            value={search}
          />
          <Tabs label={'Show decks cards'} onChange={() => {}} tabsOptions={tabOptions} />
          <Slider label={'Number of cards'} name={'numberOfCards'} />
          <Button variant={'secondary'}>
            <TrashBin />
            <Typography variant={'subtitle2'}>Clear Filter</Typography>
          </Button>
        </div>

        <Table.Root className={s.tableContainer}>
          <TableHeader columns={columns} onSort={setOrderBy} sort={orderBy} />
          <Table.Body>
            {data?.items?.map(item => {
              return (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.cardsCount}</Table.Cell>
                  <Table.Cell>{new Date(item.updated).toLocaleDateString('ru-RU')}</Table.Cell>
                  <Table.Cell>{item.author.name}</Table.Cell>
                  <Table.Cell></Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table.Root>
        <div className={s.pagination}>
          <Pagination
            currentPage={1}
            onPageChange={() => {}}
            pageSize={10}
            siblingCount={1}
            totalCount={50}
          />
        </div>
        <CheckBox />
        <CreateNewPassword />
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
