import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Edit, Out } from '@/components/assets/icons'
import { Input } from '@/components/ui'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FileUploader } from '@/components/ui/fileUploader'
import { Typography } from '@/components/ui/typography/Typography'
import { useLogoutMutation, useUpdateAccountMutation } from '@/services/auth/auth.service'

import s from './PersonInfo.module.scss'

type Props = {
  avatar: string
  email: string
  name: string
}

export const PersonInfo = ({ avatar, email, name }: Props) => {
  const navigate = useNavigate()
  const [editNicknameMode, setEditNicknameMode] = useState(false)
  const [logout, { isLoading }] = useLogoutMutation()
  const [updateData] = useUpdateAccountMutation()

  const [newName, setNewName] = useState(name)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.currentTarget.value)
  }

  const onAvatarChange = (file: File) => {
    const formData = new FormData()

    formData.append('avatar', file)

    updateData(formData)
  }

  const onChangeNameHandler = () => {
    const formData = new FormData()

    formData.append('name', name)

    updateData(formData)

    editNicknameModeHandler()
  }
  // const onKeyDownHandler = (key: string) => {
  //   if (key === 'Escape') {
  //     setEditNicknameMode(!editNicknameMode)
  //   }
  // }
  const editNicknameModeHandler = () => setEditNicknameMode(!editNicknameMode)

  const handleLogout = () => {
    logout().then(() => navigate('/login'))
  }

  return (
    <Card className={s.root}>
      <Typography variant={'h1'}>Personal Information</Typography>
      <div className={s.AvatarUploader}>
        <Avatar size={'large'} src={avatar} title={'Avatar'} />
        <FileUploader
          name={'inputFile'}
          setFile={onAvatarChange}
          trigger={
            <div className={s.pen}>
              <Edit size={25} />
            </div>
          }
        />
      </div>

      {editNicknameMode ? (
        <>
          <Input name={'newName'} onChange={onChangeHandler} type={'text'} value={newName} />
          <Button fullWidth onClick={onChangeNameHandler} variant={'primary'}>
            Save Changes
          </Button>
        </>
      ) : (
        <>
          <div>
            <div className={s.nickName}>
              <Typography variant={'h2'}>{name}</Typography>
              <Button
                disabled={isLoading}
                icon={<Edit size={21} />}
                onClick={editNicknameModeHandler}
                variant={'icon'}
              ></Button>
            </div>

            <Typography className={s.email} variant={'body2'}>
              {email}
            </Typography>
          </div>
          <Button icon={<Out />} onClick={handleLogout} variant={'secondary'}>
            Logout
          </Button>
        </>
      )}
    </Card>
  )
}
