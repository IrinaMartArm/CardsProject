import { ComponentPropsWithoutRef, FC } from 'react'

import { Table } from '@/components/ui/tables/Table'
import { Column } from '@/features/decks/Decks'

type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

export const TableHeader: FC<
  Omit<
    ComponentPropsWithoutRef<'thead'> & {
      columns: Column[]
      onSort?: (sort: Sort) => void
      sort?: Sort
    },
    'children'
  >
> = ({ columns, onSort, sort, ...restProps }) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) {
      return
    }

    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }

    if (sort.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }

  return (
    <Table.Head {...restProps}>
      <Table.Row>
        {columns.map(({ key, sortable, title }) => (
          <Table.HeadCell key={key} onClick={handleSort(key, sortable)}>
            {title}
            {sort && sort.key === key && <span>{sort.direction === 'asc' ? '▲' : '▼'}</span>}
          </Table.HeadCell>
        ))}
      </Table.Row>
    </Table.Head>
  )
}
