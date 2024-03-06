import { useEffect, useState } from 'react'

import { Table } from '@/components/ui/tables/Table'
import { TableHeader } from '@/components/ui/tables/TableHeader'
import { CardsTableMobile } from '@/features/deck/ui/CardTableMobile'
import { CardsTableBody } from '@/features/deck/ui/CardsTableBody'
import { Column } from '@/features/decks/ui/DecksTable'
import { useDeleteCardMutation } from '@/services/cards/cards.service'
import { Card } from '@/services/cards/cards.types'

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
  cards: Card[]
  currentUserId?: string
  disabled: boolean
}
export const CardsTable = ({ cards, currentUserId, disabled }: Props) => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 640

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [deleteCard] = useDeleteCardMutation()
  const deleteCardHandler = (id: string) => {
    deleteCard({ id: id })
  }

  return (
    <>
      {width > breakpoint ? (
        <>
          <Table.Root>
            <TableHeader columns={columns} />
            <Table.Body>
              {cards?.map(card => (
                <CardsTableBody
                  card={card}
                  currentUserId={currentUserId}
                  deleteCardHandler={deleteCardHandler}
                  disabled={disabled}
                  key={card.id}
                  width={width}
                />
              ))}
            </Table.Body>
          </Table.Root>
        </>
      ) : (
        <CardsTableMobile cards={cards} currentUserId={currentUserId} disabled={disabled} />
      )}
    </>
  )
}

{
  /*<Table.Row key={card.id}>*/
}
{
  /*  <Table.Cell>*/
}
{
  /*    <div className={s.cellImg}>*/
}
{
  /*      <Typography variant={'body2'}>{card.question}</Typography>*/
}
{
  /*      <img alt={''} src={card.questionImg || ''} width={40} />*/
}
{
  /*    </div>*/
}
{
  /*  </Table.Cell>*/
}
{
  /*  <Table.Cell>*/
}
{
  /*    <div className={s.cellImg}>*/
}
{
  /*      <Typography variant={'body2'}>{card.answer}</Typography>*/
}
{
  /*      <img alt={''} src={card.answerImg || ''} width={40} />*/
}
{
  /*    </div>*/
}
{
  /*  </Table.Cell>*/
}
{
  /*  <Table.Cell>{new Date(card.updated).toLocaleDateString('ru-RU')}</Table.Cell>*/
}
{
  /*  <Table.Cell>*/
}
{
  /*    <Rating value={card.grade} />*/
}
{
  /*  </Table.Cell>*/
}
{
  /*  <Table.Cell>*/
}
{
  /*    {card.userId === currentUserId && (*/
}
{
  /*        <div className={s.iconButtons}>*/
}
{
  /*          <UpdateCardModal card={card} trigger={<IconButton icon={<Edit />} />} />*/
}
{
  /*          <DeleteDialog*/
}
{
  /*              className={s.delete}*/
}
{
  /*              disabled={disabled}*/
}
{
  /*              name={'Delete Card'}*/
}
{
  /*              onClick={() => deleteCardHandler(card.id)}*/
}
{
  /*              text={'Do you really want to remove Card Name?'}*/
}
{
  /*          />*/
}
{
  /*        </div>*/
}
{
  /*    )}*/
}
{
  /*  </Table.Cell>*/
}
{
  /*</Table.Row>*/
}
