import { Edit } from '@/components/assets/icons'
import { Button, Typography } from '@/components/ui'
import { DeleteCardDialog } from '@/components/ui/modals/dialogs/DeleteCardDialog'
import { Rating } from '@/components/ui/tables/Rating'
import { Table } from '@/components/ui/tables/Table'
import { TableHeader } from '@/components/ui/tables/TableHeader'
import { Column } from '@/features/decks/ui/DecksTable'
import { Card } from '@/services/decks/decks.types'

import s from '@/features/decks/ui/decks.module.scss'

const columns: Column[] = [
  {
    key: 'question',
    sortable: true,
    title: 'Question',
  },
  {
    key: 'answer',
    sortable: true,
    title: 'Answer',
  },
  {
    key: 'updated',
    sortable: true,
    title: 'Last Updated',
  },
  {
    key: 'grade',
    sortable: true,
    title: 'Grade',
  },
  {
    key: '',
    sortable: false,
    title: '',
  },
]

type Props = {
  cards: Card[] | undefined
  currentUserId?: string
  disabled: boolean
}
export const CardsTable = ({ cards, currentUserId, disabled }: Props) => {
  return (
    <Table.Root>
      <TableHeader columns={columns} />
      <Table.Body>
        {cards?.map(card => (
          <Table.Row key={card.id}>
            <Table.Cell>
              <div className={s.cellImg}>
                <Typography variant={'body2'}>{card.question}</Typography>
                <img alt={''} src={card.questionImg || ''} width={40} />
              </div>
            </Table.Cell>
            <Table.Cell>
              <div className={s.cellImg}>
                <Typography variant={'body2'}>{card.answer}</Typography>
                <img alt={''} src={card.answerImg || ''} width={40} />
              </div>
            </Table.Cell>
            <Table.Cell>{new Date(card.updated).toLocaleDateString('ru-RU')}</Table.Cell>
            <Table.Cell>
              <Rating onClick={() => {}} value={card.grade} />
            </Table.Cell>
            <Table.Cell>
              {card.userId === currentUserId && (
                <div className={s.iconButtons}>
                  <Button
                    className={s.iconButton}
                    icon={<Edit />}
                    onClick={() => {}}
                    variant={'icon'}
                  />
                  <DeleteCardDialog className={s.delete} disabled={disabled} onClick={() => {}} />
                </div>
              )}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
