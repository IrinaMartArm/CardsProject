import { memo } from 'react'
import { Link } from 'react-router-dom'

import Logo from '@/components/assets/images/logo.png'
import { Button } from '@/components/ui/button'
import {
  UserDropdown,
  UserDropdownProps,
} from '@/components/ui/dropDownMenu/userDropdown/UserDropdown'
import { Typography } from '@/components/ui/typography/Typography'

import s from './header.module.scss'

export type HeaderProps =
  | (Partial<UserDropdownProps> & {
      isLoggedIn: false
    })
  | (UserDropdownProps & {
      isLoggedIn: true
    })

// const dropDownItems: DropDownItemsType = [
//   { foo: () => {}, icon: <Person />, separator: true, text: 'My Profile' },
//   { foo: () => {}, icon: <Out />, separator: false, text: 'Sign Out' },
// ]

export const Header = memo(({ avatar, email, isLoggedIn, onLogout, userName }: HeaderProps) => {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <Link className={s.mainLink} to={'/'}>
          <img alt={'logo'} className={s.logo} src={Logo} />
        </Link>
        {!isLoggedIn ? (
          <Button as={Link} to={'/sign-in'} variant={'secondary'}>
            <Typography variant={'body2'}>Sign In</Typography>
          </Button>
        ) : (
          <div className={s.auth}>
            <UserDropdown avatar={avatar} email={email} onLogout={onLogout} userName={userName} />
          </div>
        )}
      </div>
    </div>
  )
})
