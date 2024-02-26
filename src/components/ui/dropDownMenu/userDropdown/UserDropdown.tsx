import { Link } from 'react-router-dom'

import { Out, Person } from '@/components/assets/icons'
import { Avatar, Button, Typography } from '@/components/ui'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropDownMenu/Test'

import s from './userDropdown.module.scss'

export type UserDropdownProps = {
  avatar: string
  email: string
  onLogout: () => void
  userName: string
}

export const UserDropdown = ({ avatar, email, onLogout, userName }: UserDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={s.trigger} variant={'icon'}>
          <Typography className={s.name} variant={'subtitle1'}>
            {userName}
          </Typography>
          <Avatar src={avatar} title={userName} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Avatar src={avatar} title={userName} />
          <div>
            <Typography variant={'subtitle2'}>{userName}</Typography>
            <Typography className={s.email} variant={'caption'}>
              {email}
            </Typography>
          </div>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to={'/profile'}>
            <Person />
            <Typography variant={'caption'}>My profile</Typography>
          </Link>
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