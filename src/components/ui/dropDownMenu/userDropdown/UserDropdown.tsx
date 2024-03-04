import { useState } from 'react'

import { Out, Person } from '@/components/assets/icons'
import { Avatar, Button, Modal, Typography } from '@/components/ui'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropDownMenu/Test'
import { PersonInfo } from '@/features/personInfo'
import { clsx } from 'clsx'

import d from './../dropDown.module.scss'
import s from './userDropdown.module.scss'

export type UserDropdownProps = {
  avatar: string
  email: string
  onLogout: () => void
  userName: string
}

export const UserDropdown = ({ avatar, email, onLogout, userName }: UserDropdownProps) => {
  const [open, setOpen] = useState(false)
  const onOpenChangeHandler = () => setOpen(!open)

  return (
    <DropdownMenu onOpenChange={onOpenChangeHandler} open={open}>
      <DropdownMenuTrigger asChild>
        <Button className={s.trigger} variant={'icon'}>
          <Typography className={s.name} variant={'subtitle1'}>
            {userName}
          </Typography>
          <Avatar src={avatar} title={userName} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <span className={clsx(d.arrowBox, s.arrow)} />
        <div className={s.profile}>
          <Avatar src={avatar} title={userName} />
          <div>
            <Typography variant={'subtitle2'}>{userName}</Typography>
            <Typography className={s.email} variant={'caption'}>
              {email}
            </Typography>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Modal
            trigger={
              <div className={d.item}>
                <Person />
                <Typography variant={'caption'}>My profile</Typography>
              </div>
            }
          >
            <PersonInfo avatar={avatar} email={email} name={userName} />
          </Modal>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onSelect={onLogout}>
          <Out />
          <Typography variant={'caption'}>Sign out</Typography>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
