import { memo } from 'react'
import { Link } from 'react-router-dom'

import Logo from '@/components/assets/images/logo.png'
import { Button } from '@/components/ui/button'
import {
  UserDropdown,
  UserDropdownProps,
} from '@/components/ui/dropDownMenu/userDropdown/UserDropdown'

import s from './header.module.scss'

export type HeaderProps =
  | (Partial<UserDropdownProps> & {
      isLoggedIn: false
    })
  | (UserDropdownProps & {
      isLoggedIn: true
    })

export const Header = memo(({ avatar, email, isLoggedIn, onLogout, userName }: HeaderProps) => {
  return (
    <div className={s.root}>
      <div className={s.header}>
        <Link className={s.mainLink} to={'/'}>
          <img alt={'logo'} className={s.logo} src={Logo} />
        </Link>
        {!isLoggedIn ? (
          <Button as={Link} to={'/login'} variant={'secondary'}>
            Sign In
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
