import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Picture } from '@/components/assets/icons'
import { Button, ControlledCheckBox, ControlledTextField, Modal } from '@/components/ui'
import { FileUploader } from '@/components/ui/fileUploader'
import { ModalClose } from '@/components/ui/modals/ModalClose'
import { newDeckSchema } from '@/utils/Validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import btn from '../../button/button.module.scss'
import s from '../Modals.module.scss'

type FormValues = z.infer<typeof newDeckSchema>

type Props = {
  defaultValues?: FormValues
  onAddDeck: (data: FormValues) => void
}
export const AddNewDeckDialog = ({
  defaultValues = { isPrivate: false, name: '' },
  onAddDeck,
}: Props) => {
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(newDeckSchema),
  })

  const onSubmit = handleSubmit(data => {
    if (file) {
      onAddDeck({ ...data, cover: file })
    } else {
      onAddDeck({ ...data, cover: undefined })
    }
    setOpen(!open)
    onCancel()
  })
  const onOpenChange = () => setOpen(!open)
  const onCancel = () => reset()

  return (
    <Modal
      onOpenChange={onOpenChange}
      open={open}
      title={'Add New Deck'}
      trigger={<Button variant={'primary'}>Add New Deck</Button>}
    >
      <form className={s.child} onSubmit={onSubmit}>
        <ControlledTextField control={control} label={'Name Pack'} name={'name'} type={'text'} />
        <FileUploader
          name={'deckCover'}
          setFile={setFile}
          trigger={
            <div className={clsx(btn.secondary, btn.fullWidth)}>
              <Picture />
              Upload Image
            </div>
          }
        />

        <ControlledCheckBox control={control} label={'Private pack'} name={'isPrivate'} />
      </form>
      <ModalClose>
        <div className={s.footer}>
          <Button onClick={onCancel} variant={'secondary'}>
            Cancel
          </Button>
          <Button onClick={onSubmit}>Add New Pack</Button>
        </div>
      </ModalClose>
    </Modal>
  )
}
