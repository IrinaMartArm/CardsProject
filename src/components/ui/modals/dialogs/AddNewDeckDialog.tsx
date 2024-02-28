import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Picture } from '@/components/assets/icons'
import { Button, ControlledCheckBox, ControlledTextField, Modal } from '@/components/ui'
import { ModalClose } from '@/components/ui/modals/ModalClose'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '../Modals.module.scss'

const newDeckSchema = z.object({
  isPrivate: z.boolean(),
  name: z.string().max(1000).min(5),
})

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
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues,
    resolver: zodResolver(newDeckSchema),
  })

  const onSubmit = handleSubmit(data => {
    onAddDeck(data)
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
        <Button fullWidth icon={<Picture />} variant={'secondary'}>
          Upload Image
        </Button>
        <ControlledCheckBox control={control} label={'Private pack'} name={'isPrivate'} />
      </form>
      <ModalClose>
        <div className={s.footer}>
          <Button onClick={onCancel} variant={'secondary'}>
            Cancel
          </Button>
          <Button onClick={onSubmit} variant={'primary'}>
            Add New Pack
          </Button>
        </div>
      </ModalClose>
    </Modal>
  )
}
