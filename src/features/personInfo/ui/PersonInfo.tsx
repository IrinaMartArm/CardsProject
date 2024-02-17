import { useState } from 'react'

import { Pen } from '@/components/assets/icons'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FileUploader } from '@/components/ui/fileUploader'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography/Typography'
import { convertFileToBase64 } from '@/utils/convertFile'

import s from './PersonInfo.module.scss'

export const PersonInfo = () => {
  const [editNicknameMode, setEditNicknameMode] = useState(false)
  const [nickname, setNickname] = useState('nick')
  const [avatar, setAvatar] = useState(
    'https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg'
  )
  const [error, setError] = useState('')

  const onSubmitHandler = () => {
    if (nickname.length === 0) {
      setError('Nickname required!')
    } else {
      setEditNicknameMode(!editNicknameMode)
    }
  }
  const onKeyDownHandler = (key: string) => {
    if (key === 'Escape') {
      setError('')
      setEditNicknameMode(!editNicknameMode)
      setNickname('nick') // сделано, чтобы не багалось пока нету rtk!! убрать!!!
    }
    if (key === 'Enter') {
      onSubmitHandler()
    }
  }

  const onNicknameChangeHandler = (value: string) => {
    setError('')
    setNickname(value)
  }

  return (
    <Card as={'div'} className={s.root}>
      <Typography className={s.title} variant={'h3'}>
        Personal Information
      </Typography>
      <div className={s.AvatarUploader}>
        <Avatar size={'large'} src={avatar} title={'Avatar'} />
        <FileUploader
          className={s.pen}
          setFile={(file: File) => {
            convertFileToBase64(file, setAvatar)
          }}
          trigger={<Pen />}
        />
      </div>

      {editNicknameMode ? (
        <>
          <Input
            autoFocus
            className={s.nickNameInput}
            errorMessage={error}
            label={'Nickname'}
            onChange={e => onNicknameChangeHandler(e.currentTarget.value)}
            onKeyDown={e => onKeyDownHandler(e.key)}
            type={'text'}
            value={nickname}
          />
          <Button onClick={onSubmitHandler} variant={'primary'}>
            Save Changes
          </Button>
        </>
      ) : (
        <>
          <Typography className={s.nickName} variant={'body1'}>
            {nickname}
            <Button
              className={s.editNick}
              onClick={() => setEditNicknameMode(true)}
              variant={'link'}
            >
              <Pen size={21} />
            </Button>
          </Typography>
          <Typography variant={'body2'}>email</Typography>
        </>
      )}
    </Card>
  )
}
