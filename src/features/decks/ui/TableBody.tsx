import { Link } from 'react-router-dom'

import { Play } from '@/components/assets/icons'
import { Button, Table, Typography } from '@/components/ui'
import { DeleteDialog } from '@/components/ui/modals/dialogs/DeleteDialog'
import { EditDeckDialog } from '@/components/ui/modals/dialogs/UpdateDeckDialog'
import { Deck } from '@/services/decks/decks.types'

import s from '@/features/decks/ui/decks.module.scss'

type TableBodyProps = {
  currentUserId?: string
  deleteClickHandler: (id: string) => () => void
  disabled: boolean
  item: Deck
  width?: number
}

export const TableBody = ({
  currentUserId,
  deleteClickHandler,
  disabled,
  item,
  width,
}: TableBodyProps) => {
  return (
    <Table.Row className={s.tableBody} key={item.id}>
      <Table.Cell>
        <div className={s.cellImg}>
          <Typography as={Link} to={`/deck/${item.id}`} variant={'body2'}>
            {item.name}
          </Typography>
          {item.cover && <img alt={''} src={item.cover} width={30} />}
        </div>
      </Table.Cell>
      <Table.Cell>{item.cardsCount}</Table.Cell>
      <Table.Cell>{new Date(item.updated).toLocaleDateString('ru-RU')}</Table.Cell>
      <Table.Cell>{item.author.name}</Table.Cell>
      {width && width > 640 && (
        <Table.Cell>
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
        </Table.Cell>
      )}
    </Table.Row>
  )
}
