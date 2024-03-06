import { Edit } from '@/components/assets/icons'
import { IconButton } from '@/components/ui/IconButton'
import { DeleteDialog } from '@/components/ui/modals/dialogs/DeleteDialog'
import { Table } from '@/components/ui/tables/Table'
import { TableHeader } from '@/components/ui/tables/TableHeader'
import { UpdateCardModal } from '@/features/card/ui/CardActions/UpdateCardModal/UpdateCardModal'
import { CardsTableBody } from '@/features/deck/ui/CardsTableBody'
import { Column } from '@/features/decks/ui/DecksTable'
import { useDeleteCardMutation } from '@/services/cards/cards.service'
import { Card } from '@/services/cards/cards.types'

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
]

type Props = {
  cards: Card[] | undefined
  currentUserId?: string
  disabled: boolean
}
export const CardsTableMobile = ({ cards, currentUserId, disabled }: Props) => {
  const [deleteCard] = useDeleteCardMutation()
  const deleteCardHandler = (id: string) => {
    deleteCard({ id: id })
  }

  return (
    <>
      {cards?.map(card => (
        <div className={s.tableMobile} key={card.id}>
          <Table.Root className={s.tableContainer}>
            <TableHeader columns={columns} />
            <Table.Body className={s.tableBody}>
              <CardsTableBody
                card={card}
                currentUserId={currentUserId}
                deleteCardHandler={deleteCardHandler}
                disabled={disabled}
                key={card.id}
              />
            </Table.Body>
          </Table.Root>
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
        </div>
      ))}
    </>
  )
}
