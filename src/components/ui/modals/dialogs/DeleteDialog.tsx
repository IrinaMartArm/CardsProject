import { TrashBin } from '@/components/assets/icons'
import { Button, Modal, Typography } from '@/components/ui'
import { ModalClose } from '@/components/ui/modals/ModalClose'
import { clsx } from 'clsx'

import s from '../Modals.module.scss'

type Props = {
  className?: string
  disabled: boolean
  name?: string
  onClick: () => void
  text: string
}
export const DeleteDialog = ({ className, disabled, name, onClick, text }: Props) => {
  const onClickHandler = () => onClick()

  return (
    <Modal
      title={'Delete Card'}
      trigger={
        <div className={clsx(className)}>
          <TrashBin />
          {name}
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
            Delete
          </Button>
        </div>
      </ModalClose>
    </Modal>
  )
}
