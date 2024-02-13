import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography/Typography'

import s from './personInfo.module.scss'
export const PersonInfo = () => {
  return (
    <div className={s.root}>
      <Typography variant={'h3'}>Personal Information</Typography>
      <Avatar size={'large'} title={'Avatar'} />
      <Input label={'Nickname'} type={'text'} />
      <Button variant={'primary'}>Save Changes</Button>
    </div>
  )
}
