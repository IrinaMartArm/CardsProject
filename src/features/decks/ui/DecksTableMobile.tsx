import { Link } from 'react-router-dom'

import { Play } from '@/components/assets/icons'
import { Button } from '@/components/ui'
import { DeleteDialog } from '@/components/ui/modals/dialogs/DeleteDialog'
import { EditDeckDialog } from '@/components/ui/modals/dialogs/UpdateDeckDialog'
import { Table } from '@/components/ui/tables/Table'
import { Sort, TableHeader } from '@/components/ui/tables/TableHeader'
import { TableBody } from '@/features/decks/ui/TableBody'
import { DeckResponse } from '@/services/decks/decks.types'

import s from '@/features/decks/ui/decks.module.scss'

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
]

type Props = {
  currentUserId?: string
  decks: DeckResponse | undefined
  disabled: boolean
  onDeleteClick: (id: string) => void
  onSort: (value: Sort) => void
  orderBy: Sort
}

export const DecksTableMobile = ({
  currentUserId,
  decks,
  disabled,
  onDeleteClick,
  onSort,
  orderBy,
}: Props) => {
  const deleteClickHandler = (id: string) => () => {
    onDeleteClick(id)
  }

  return (
    <>
      {decks?.items?.map(item => {
        return (
          <div className={s.tableMobile} key={item.id}>
            <Table.Root className={s.tableContainer}>
              <TableHeader columns={columns} onSort={onSort} sort={orderBy} />
              <Table.Body className={s.tableBody}>
                <TableBody
                  currentUserId={currentUserId}
                  deleteClickHandler={deleteClickHandler}
                  disabled={disabled}
                  item={item}
                />
              </Table.Body>
            </Table.Root>
            <div className={s.iconButtons}>
              <Button
                as={Link}
                className={s.iconButton}
                icon={<Play />}
                to={`/learn/${item.id}`}
                variant={'icon'}
              />
              {item.author.id === currentUserId && (
                <>
                  <EditDeckDialog className={s.delete} deck={item} id={item.id} />
                  <DeleteDialog
                    className={s.delete}
                    disabled={disabled}
                    name={'Delete Deck'}
                    onClick={deleteClickHandler(item.id)}
                    text={'Do you really want to remove Deck Name? All cards will be deleted.'}
                  />
                </>
              )}
            </div>
          </div>
        )
      })}
    </>
  )
}
