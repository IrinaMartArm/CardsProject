import { ChangeEvent, useState } from 'react'

import { Edit, Picture } from '@/components/assets/icons'
import { Button, CheckBox, Input, Modal } from '@/components/ui'
import { FileUploader } from '@/components/ui/fileUploader'
import { ModalClose } from '@/components/ui/modals/ModalClose'
import { UpdateDeckArgs } from '@/services/decks/decks.types'
import { clsx } from 'clsx'

import btn from '../../button/button.module.scss'
import s from '../Modals.module.scss'

type Pack = {
  cover?: string
  isPrivate: boolean
  name: string
}

type Props = {
  deck: Pack
  id: string
  onUpdateDeck: (data: UpdateDeckArgs) => void
}
export const AddNewDeckDialog = ({ deck, id, onUpdateDeck }: Props) => {
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [name, setName] = useState(deck.name)
  const [isPrivate, setIsPrivate] = useState(deck.isPrivate)

  const updatePackHandler = () => {
    if (file) {
      onUpdateDeck({ cover: file, id, name })
    } else {
      onUpdateDeck({ id, name })
    }
  }

  const onOpenChange = () => setOpen(!open)
  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  const onCheckedChange = (isPrivate: boolean) => {
    setIsPrivate(isPrivate)
  }

  return (
    <Modal
      onOpenChange={onOpenChange}
      open={open}
      title={'Add New Deck'}
      trigger={<Button className={s.iconButton} icon={<Edit />} variant={'icon'} />}
    >
      <div className={s.child}>
        <Input
          label={'Name Pack'}
          name={'name'}
          onChange={onNameChange}
          type={'text'}
          value={name}
        />
        <img alt={''} src={deck.cover} width={70} />
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
        <CheckBox
          checked={isPrivate}
          label={'Private pack'}
          name={'isPrivate'}
          onCheckedChange={() => {
            onCheckedChange(!isPrivate)
          }}
        />
      </div>
      <ModalClose>
        <div className={s.footer}>
          <Button onClick={() => {}} variant={'secondary'}>
            Cancel
          </Button>
          <Button onClick={updatePackHandler} variant={'primary'}>
            Update Pack
          </Button>
        </div>
      </ModalClose>
    </Modal>
  )
}
