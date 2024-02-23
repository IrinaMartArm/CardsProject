import { Table } from '@/components/ui/tables/Table'
import { TableHeader } from '@/components/ui/tables/TableHeader'
import { Column } from '@/pages/decksPage/DecksTable'
import { Card } from '@/services/decks/decks.types'

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
}
export const CardsTable = ({ cards }: Props) => {
  return (
    <Table.Root>
      <TableHeader columns={columns} />
      <Table.Body>
        {cards?.map(card => (
          <Table.Row key={card.id}>
            <Table.Cell>{card.question}</Table.Cell>
            <Table.Cell>{card.answer}</Table.Cell>
            <Table.Cell>{new Date(card.updated).toLocaleDateString('ru-RU')}</Table.Cell>
            <Table.Cell>{card.grade}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
