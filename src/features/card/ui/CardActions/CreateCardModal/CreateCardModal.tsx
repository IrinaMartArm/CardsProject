import { useState } from 'react'
import { toast } from 'react-toastify'

import { Button, Modal } from '@/components/ui'
import { useCreateCardMutation } from '@/services/cards/cards.service'
import { handleErrorResponse } from '@/utils/handleErrorResponse'

import s from './CreateCardModal.module.scss'

import { ActionsCardForm } from '../ActionsCardForm/ActionsCardForm'

type Props = {
  className?: string
  deckId: string | undefined
}

export const CreateCardModal = ({ className, deckId }: Props) => {
  const [open, setOpen] = useState(false)
  const [createCard, { isLoading }] = useCreateCardMutation()
  const handleSubmit = (values: FormData) => {
    return createCard({ body: values, id: deckId }).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        toast.success('A new card has been created')
        setOpen(false)
      }
    })
  }

  return (
    <Modal
      className={`${s.modal} ${className}`}
      onOpenChange={setOpen}
      open={open}
      title={'Creating New Card'}
      trigger={<Button>Add New Card</Button>}
    >
      <ActionsCardForm disabled={isLoading} onSubmit={handleSubmit} submitTitle={'Add New Card'} />
    </Modal>
  )
}
