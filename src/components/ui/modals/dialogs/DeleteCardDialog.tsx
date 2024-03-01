import { TrashBin } from '@/components/assets/icons'
import { Button, Modal, Typography } from '@/components/ui'
import { ModalClose } from '@/components/ui/modals/ModalClose'

import s from '../Modals.module.scss'

type Props = {
  disabled: boolean
  onClick: () => void
}
export const DeleteCardDialog = ({ disabled, onClick }: Props) => {
  const onClickHandler = () => onClick()

  return (
    <Modal
      title={'Delete CardBox'}
      trigger={<Button disabled={disabled} icon={<TrashBin />} variant={'icon'} />}
    >
      <div className={s.child}>
        <Typography variant={'body2'}>
          Do you really want to remove Card Name? All cards will be deleted.
        </Typography>
      </div>
      <ModalClose>
        <div className={s.footer}>
          <Button variant={'secondary'}>Cancel</Button>
          <Button onClick={onClickHandler} variant={'primary'}>
            Delete Card
          </Button>
        </div>
      </ModalClose>
    </Modal>
  )
}
