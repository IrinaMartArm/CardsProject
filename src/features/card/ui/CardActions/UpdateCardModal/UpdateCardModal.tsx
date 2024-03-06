import { ReactNode, useState } from 'react'
import { toast } from 'react-toastify'

import { Modal } from '@/components/ui'
import { useUpdateCardMutation } from '@/services/cards/cards.service'
import { Card } from '@/services/cards/cards.types'
import { handleErrorResponse } from '@/utils/handleErrorResponse'

import s from './UpdateCardModal.module.scss'

import { ActionsCardForm } from '../ActionsCardForm/ActionsCardForm'

type Props = {
  card: Card
  className?: string
  trigger: ReactNode
}

export const UpdateCardModal = ({ card, className, trigger }: Props) => {
  const [open, setOpen] = useState(false)

  const [update, { isLoading }] = useUpdateCardMutation()

  const handleUpdateCard = (formValues: FormData) => {
    return update({ body: formValues, card }).then(data => {
      if ('error' in data) {
        return handleErrorResponse(data.error)
      } else {
        toast.success('Success updated card')
        setOpen(false)
      }
    })
  }

  return (
    <Modal
      className={`${s.modal} ${className}`}
      onOpenChange={setOpen}
      open={open}
      title={'Edit card'}
      trigger={trigger}
    >
      <ActionsCardForm
        card={card}
        disabled={isLoading}
        onSubmit={handleUpdateCard}
        submitTitle={'Save changes'}
      />
    </Modal>
  )
}
