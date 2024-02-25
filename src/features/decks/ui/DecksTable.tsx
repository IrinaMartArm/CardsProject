import { Link } from 'react-router-dom'

import { Edit, Play, TrashBin } from '@/components/assets/icons'
import { Typography } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { Table } from '@/components/ui/tables/Table'
import { Sort, TableHeader } from '@/components/ui/tables/TableHeader'
import { DeckResponse } from '@/services/decks/decks.types'

import s from '@/features/decks/ui/decks.module.scss'

export type Column = {
  key: string
  sortable?: boolean
  title: string
}

type Props = {
  currentUserId: string
  decks: DeckResponse | undefined
  disabled: boolean
  onDeleteClick: (id: string) => void
  onEditClick: (id: string) => void
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

export const DecksTable = ({
  currentUserId,
  decks,
  disabled,
  onDeleteClick,
  onEditClick,
  onSort,
  orderBy,
}: Props) => {
  const deleteClickHandler = (id: string) => () => {
    onDeleteClick(id)
  }
  const editClickHandler = (id: string) => () => {
    onEditClick(id)
  }

  return (
    <Table.Root className={s.tableContainer}>
      <TableHeader columns={columns} onSort={onSort} sort={orderBy} />
      <Table.Body>
        {decks?.items?.map(item => {
          return (
            <Table.Row key={item.id}>
              <Table.Cell>
                <Typography as={Link} to={`/decks/${item.id}`} variant={'body2'}>
                  {item.name}
                </Typography>
              </Table.Cell>
              <Table.Cell>{item.cardsCount}</Table.Cell>
              <Table.Cell>{new Date(item.updated).toLocaleDateString('ru-RU')}</Table.Cell>
              <Table.Cell>{item.author.name}</Table.Cell>
              <Table.Cell className={s.iconButtons}>
                <Button
                  as={Link}
                  className={s.iconButton}
                  icon={<Play />}
                  to={`/decks/${item.id}/learn`}
                  variant={'link'}
                />
                {item.author.id === currentUserId && (
                  <>
                    <Button
                      className={s.iconButton}
                      icon={<Edit />}
                      onClick={editClickHandler(item.id)}
                      variant={'link'}
                    />
                    <Button
                      className={s.iconButton}
                      disabled={disabled}
                      icon={<TrashBin />}
                      onClick={deleteClickHandler(item.id)}
                      variant={'link'}
                    />
                  </>
                )}
              </Table.Cell>
            </Table.Row>
          )
        })}
      </Table.Body>
    </Table.Root>
  )
}
