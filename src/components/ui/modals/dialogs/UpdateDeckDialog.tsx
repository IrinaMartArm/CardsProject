import { useState } from 'react'

import { Edit } from '@/components/assets/icons'
import { Modal } from '@/components/ui'
import { EditDeck } from '@/features/deck/ui/EditDeck'
import { useUpdateDeckMutation } from '@/services/decks/decks.service'
import { Deck, UpdateDeckArgs } from '@/services/decks/decks.types'
import { clsx } from 'clsx'

type Props = {
  className?: string
  deck?: Deck
  id: string
  name?: string
}
export const EditDeckDialog = ({ className, deck, id, name }: Props) => {
  const [updateDeck] = useUpdateDeckMutation()
  const [open, setOpen] = useState(false)

  const onUpdateDeck = (data: UpdateDeckArgs) => {
    updateDeck(data)
  }

  const onOpenChange = () => setOpen(!open)

  return (
    <Modal
      onOpenChange={onOpenChange}
      open={open}
      title={'Edit Pack'}
      trigger={
        <div className={clsx(className)}>
          <Edit />
          {name}
        </div>
      }
    >
      <EditDeck deck={deck} id={id} onUpdateDeck={onUpdateDeck} />
    </Modal>
  )
}
