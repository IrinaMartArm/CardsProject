import { TrashBin } from '@/components/assets/icons'
import { Button, Modal, Typography } from '@/components/ui'
import { ModalClose } from '@/components/ui/modals/ModalClose'

import s from '../Modals.module.scss'

type Props = {
  className?: string
  disabled: boolean
  name?: string
  onClick: () => void
}
export const DeleteCardDialog = ({ className, disabled, name, onClick }: Props) => {
  const onClickHandler = () => onClick()

  return (
    <Modal
      title={'Delete Card'}
      trigger={
        <div className={className}>
          <TrashBin />
          {name}
        </div>
      }
    >
      <div className={s.child}>
        <Typography variant={'body2'}>
          Do you really want to remove Card Name? All cards will be deleted.
        </Typography>
      </div>
      <ModalClose>
        <div className={s.footer}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button disabled={disabled} onClick={onClickHandler} variant={'primary'}>
            Delete Card
          </Button>
        </div>
      </ModalClose>
    </Modal>
  )
}
