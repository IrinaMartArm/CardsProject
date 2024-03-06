import { Edit } from '@/components/assets/icons'
import { Table, Typography } from '@/components/ui'
import { IconButton } from '@/components/ui/IconButton'
import { DeleteDialog } from '@/components/ui/modals/dialogs/DeleteDialog'
import { Rating } from '@/components/ui/tables/Rating'
import { UpdateCardModal } from '@/features/card/ui/CardActions/UpdateCardModal/UpdateCardModal'
import { Card } from '@/services/cards/cards.types'

import s from '@/features/decks/ui/decks.module.scss'

type TableBodyProps = {
  card: Card
  currentUserId?: string
  deleteCardHandler: (id: string) => void
  disabled: boolean
  width?: number
}

export const CardsTableBody = ({
  card,
  currentUserId,
  deleteCardHandler,
  disabled,
  width,
}: TableBodyProps) => {
  return (
    <Table.Row className={s.tableBody} key={card.id}>
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
        <Rating value={card.grade} />
      </Table.Cell>
      {width && width > 640 && (
        <Table.Cell>
          {card.userId === currentUserId && (
            <div className={s.iconButtons}>
              <UpdateCardModal card={card} trigger={<IconButton icon={<Edit />} />} />
              <DeleteDialog
                className={s.delete}
                disabled={disabled}
                name={'Delete Card'}
                onClick={() => deleteCardHandler(card.id)}
                text={'Do you really want to remove Card Name?'}
              />
            </div>
          )}
        </Table.Cell>
      )}
    </Table.Row>
  )
}
