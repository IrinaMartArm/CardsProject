import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Edit } from '@/components/assets/icons'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/ControlledTextField'
import { FileUploader } from '@/components/ui/fileUploader'
import { Typography } from '@/components/ui/typography/Typography'
import { nikNameSchema } from '@/utils/Validation'
import { convertFileToBase64 } from '@/utils/convertFile'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './PersonInfo.module.scss'

type FormValues = z.infer<typeof nikNameSchema>

export const PersonInfo = () => {
  const [editNicknameMode, setEditNicknameMode] = useState(false)
  const [nickname, setNickname] = useState('nick')
  const [avatar, setAvatar] = useState(
    'https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg'
  )
  // const [error, setError] = useState('')

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(nikNameSchema),
  })

  const onSubmitHandler = () => {
    setEditNicknameMode(!editNicknameMode)
  }
  const onKeyDownHandler = (key: string) => {
    if (key === 'Escape') {
      setEditNicknameMode(!editNicknameMode)
      setNickname('nick') // сделано, чтобы не багалось пока нету rtk!! убрать!!!
    }
  }

  return (
    <Card as={'form'} className={s.root} onSubmit={handleSubmit(onSubmitHandler)}>
      <Typography variant={'h3'}>Personal Information</Typography>
      <FileUploader
        setFile={(file: File) => {
          convertFileToBase64(file, setAvatar)
        }}
        trigger={
          <div className={s.AvatarUploader}>
            <Avatar size={'large'} src={avatar} title={'Avatar'} />
            <Edit className={s.pen} size={25} />
          </div>
        }
      />

      {editNicknameMode ? (
        <>
          <ControlledTextField
            autoFocus
            control={control}
            errorMessage={errors.root?.message}
            label={'Nickname'}
            name={'nickName'}
            onEnter={onSubmitHandler}
            onKeyDown={e => onKeyDownHandler(e.key)}
            type={'text'}
          />
          <Button type={'submit'} variant={'primary'}>
            Save Changes
          </Button>
        </>
      ) : (
        <>
          <Typography className={s.nickName} variant={'body1'}>
            {nickname}
            <Edit onClick={() => setEditNicknameMode(true)} size={21} />
          </Typography>
          <Typography variant={'body2'}>email</Typography>
        </>
      )}
    </Card>
  )
}
