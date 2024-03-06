import { useEffect, useState } from 'react'

import { Table } from '@/components/ui/tables/Table'
import { Sort, TableHeader } from '@/components/ui/tables/TableHeader'
import { DecksTableMobile } from '@/features/decks/ui/DecksTableMobile'
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
  {
    key: '',
    sortable: false,
    title: '',
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

export const DecksTable = ({
  currentUserId,
  decks,
  disabled,
  onDeleteClick,
  onSort,
  orderBy,
}: Props) => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 640

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const deleteClickHandler = (id: string) => () => {
    onDeleteClick(id)
  }

  return (
    // <Table.Root className={s.tableContainer}>
    <>
      {width > breakpoint ? (
        <>
          <Table.Root className={s.tableContainer}>
            <TableHeader columns={columns} onSort={onSort} sort={orderBy} />
            <Table.Body>
              {decks?.items?.map(item => {
                return (
                  <TableBody
                    currentUserId={currentUserId || ''}
                    deleteClickHandler={deleteClickHandler}
                    disabled={disabled}
                    item={item}
                    key={item.id}
                    width={width}
                  />
                )
              })}
            </Table.Body>
          </Table.Root>
        </>
      ) : (
        <DecksTableMobile
          currentUserId={currentUserId}
          decks={decks}
          disabled={disabled}
          onDeleteClick={onDeleteClick}
          onSort={onSort}
          orderBy={orderBy}
        />
      )}
    </>
  )
}
