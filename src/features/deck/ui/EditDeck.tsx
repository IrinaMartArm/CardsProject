import { ChangeEvent, useState } from 'react'

import { Picture, TrashBin } from '@/components/assets/icons'
import { Button, CheckBox, Input } from '@/components/ui'
import { FileUploader } from '@/components/ui/fileUploader'
import { ModalClose } from '@/components/ui/modals/ModalClose'
import { Deck, UpdateDeckArgs } from '@/services/decks/decks.types'
import { Cover } from '@/utils/Types'
import { clsx } from 'clsx'

import btn from '@/components/ui/button/button.module.scss'
import s from '@/components/ui/modals/Modals.module.scss'

type Props = {
  deck?: Deck
  id: string
  onUpdateDeck: (data: UpdateDeckArgs) => void
}
export const EditDeck = ({ deck, id, onUpdateDeck }: Props) => {
  const [file, setFile] = useState<Cover>(deck?.cover || '')
  const [name, setName] = useState(deck?.name)
  const [isPrivate, setIsPrivate] = useState(deck?.isPrivate)

  const updatePackHandler = () => {
    if (file && file instanceof File) {
      onUpdateDeck({ cover: file, id, name })
    } else {
      onUpdateDeck({ id, name })
    }
  }

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  const onCheckedChange = (isPrivate: boolean) => {
    setIsPrivate(isPrivate)
  }
  const clearCoverHandle = () => {
    setFile(null)
  }

  const newFile = file instanceof File ? URL.createObjectURL(file) : file || ''

  return (
    <>
      <div className={s.child}>
        <Input
          label={'Name Pack'}
          name={'name'}
          onChange={onNameChange}
          type={'text'}
          value={name}
        />
        <div className={s.cover}>
          <img alt={'cover'} className={s.img} src={newFile} />
          <Button
            className={s.clearCover}
            icon={<TrashBin />}
            onClick={clearCoverHandle}
            variant={'icon'}
          />
        </div>

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
    </>
  )
}
