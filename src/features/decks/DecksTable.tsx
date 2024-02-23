import { Edit, Play, TrashBin } from '@/components/assets/icons'
import { Button } from '@/components/ui/button'
import { Table } from '@/components/ui/tables/Table'
import { Sort, TableHeader } from '@/components/ui/tables/TableHeader'
import { useDeleteDeckMutation } from '@/services/decks/decks.service'
import { DeckResponse } from '@/services/decks/decks.types'

import s from '@/features/decks/decks.module.scss'

export type Column = {
  key: string
  sortable?: boolean
  title: string
}

type Props = {
  data: DeckResponse | undefined
  onSort: (value: Sort) => void
  orderBy: Sort
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

export const DecksTable = ({ data, onSort, orderBy }: Props) => {
  const [deleteDeck, { isLoading: isDeckBeingDeleted }] = useDeleteDeckMutation()

  return (
    <Table.Root className={s.tableContainer}>
      <TableHeader columns={columns} onSort={onSort} sort={orderBy} />
      <Table.Body>
        {data?.items?.map(item => {
          return (
            <Table.Row key={item.id}>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.cardsCount}</Table.Cell>
              <Table.Cell>{new Date(item.updated).toLocaleDateString('ru-RU')}</Table.Cell>
              <Table.Cell>{item.author.name}</Table.Cell>
              <Table.Cell className={s.iconButtons}>
                <Button className={s.iconButton} icon={<Play />} variant={'link'} />
                <Button className={s.iconButton} icon={<Edit />} variant={'link'} />
                <Button
                  className={s.iconButton}
                  desabled={isDeckBeingDeleted}
                  icon={<TrashBin />}
                  onClick={() => {
                    deleteDeck({
                      id: item.id,
                    })
                  }}
                  variant={'link'}
                />
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
