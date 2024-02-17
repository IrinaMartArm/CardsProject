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
]

export const Decks = () => {
  const { data, error, isLoading } = useGetDecksQuery

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
      <Table.Root className={s.container}>
        <TableHeader columns={columns} />
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
      </Table.Root>
    </div>
  )
}
