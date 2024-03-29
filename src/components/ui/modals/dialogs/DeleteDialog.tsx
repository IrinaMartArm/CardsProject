import { TrashBin } from '@/components/assets/icons'
import { Button, Modal, Typography } from '@/components/ui'
import { ModalClose } from '@/components/ui/modals/ModalClose'

import s from '../Modals.module.scss'

type Props = {
  className?: string
  disabled: boolean
  label?: string
  name?: string
  onClick: () => void
  text: string
}
export const DeleteDialog = ({ className, disabled, label, name, onClick, text }: Props) => {
  const onClickHandler = () => onClick()

  return (
    <Modal
      title={name}
      trigger={
        <div className={className}>
          <TrashBin />
          {label}
        </div>
      }
    >
      <div className={s.child}>
        <Typography variant={'body2'}>{text}</Typography>
      </div>
      <ModalClose>
        <div className={s.footer}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button disabled={disabled} onClick={onClickHandler} variant={'primary'}>
            {name}
          </Button>
        </div>
      </ModalClose>
    </Modal>
  )
}
