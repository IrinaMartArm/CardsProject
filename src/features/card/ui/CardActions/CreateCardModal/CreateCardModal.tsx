import { useState } from 'react'

import { Button, Modal } from '@/components/ui'

import s from './CreateCardModal.module.scss'

import { ActionsCardForm } from '../ActionsCardForm/ActionsCardForm'

type Props = {
  className?: string
}

export const CreateCardModal = ({ className }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      className={`${s.modal} ${className}`}
      onOpenChange={setOpen}
      open={open}
      title={'Creating New CardBox'}
      trigger={<Button>Add New Card</Button>}
    >
      <ActionsCardForm submitTitle={'Add New CardBox'} />
    </Modal>
  )
}
