import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { Table } from '@/components/ui/tables/Table'
import { TableHeader } from '@/components/ui/tables/TableHeader'
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
    title: 'Name',
  },
  {
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    key: 'updated',
    title: 'Last Updated',
  },
  {
    key: 'createdBy',
    title: 'Created by',
  },
  {
    key: '',
    title: '',
  },
]

export const Decks = () => {
  const [search, setSearch] = useState('')
  // const debouncedSearch = useDebounce()
  const { data, error, isLoading } = useGetDecksQuery({ name: search })

  // const handleSort = (key: string) => {
  //   if (sort && sort.key === key) {
  //     setSort({
  //       direction: sort.direction === 'asc' ? 'desc' : 'asc',
  //       key,
  //     })
  //   } else {
  //     setSort({
  //       direction: 'asc',
  //       key,
  //     })
  //   }
  // }

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>Error: {JSON.stringify(error)}</h2>
  }

  return (
    <div className={s.root}>
      <Input onChange={e => setSearch(e.target.value)} type={'search'} value={search} />
      <Table.Root className={s.container}>
        <TableHeader columns={columns} />
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
    </div>
  )
}
