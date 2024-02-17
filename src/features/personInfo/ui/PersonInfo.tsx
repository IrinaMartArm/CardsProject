import { useState } from 'react'

import { Pen } from '@/components/assets/icons'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography/Typography'
import { FileUploader } from '@/components/ui/uploader'
import { convertFileToBase64 } from '@/utils/convertFile'

import s from './personInfo.module.scss'

import { COVER_SCHEMA } from '../../../constants'
export const PersonInfo = () => {
  const [editNicknameMode, setEditNicknameMode] = useState(false)
  const [nickname, setNickname] = useState('nick')
  const [avatar, setAvatar] = useState(
    'https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg'
  )

  return (
    <Card ClassName={s.root} as={'div'}>
      <Typography variant={'h3'}>Personal Information</Typography>
      <FileUploader
        setFile={(file: File) => {
          convertFileToBase64(file, setAvatar)
        }}
        trigger={
          <div className={s.AvatarUploader}>
            <Avatar size={'large'} src={avatar} title={'Avatar'} />
            <Pen className={s.pen} size={25} />
          </div>
        }
        validationSchema={COVER_SCHEMA}
      />

      {editNicknameMode ? (
        <>
          <Input
            autoFocus
            label={'Nickname'}
            onChange={e => setNickname(e.currentTarget.value)}
            onEnter={e => {
              setNickname(e.currentTarget.value)
              setEditNicknameMode(false)
            }}
            type={'text'}
            value={nickname}
          />
          <Button onClick={() => setEditNicknameMode(!editNicknameMode)} variant={'primary'}>
            Save Changes
          </Button>
        </>
      ) : (
        <>
          <Typography
            className={s.nickName}
            onClick={() => setEditNicknameMode(!editNicknameMode)}
            variant={'body1'}
          >
            {nickname}
            <Button icon={<Pen size={21} />} />
          </Typography>
          <Typography variant={'body2'}>email</Typography>
        </>
      )}
    </Card>
  )
}
