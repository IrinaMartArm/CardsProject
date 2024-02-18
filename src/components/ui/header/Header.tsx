import { Logo } from '@/components/assets/icons/Logo'
import { Button } from '@/components/ui/button'
import { DropDownAuth } from '@/components/ui/dropDownMenu/DropDownAuth'
import { Typography } from '@/components/ui/typography/Typography'

import s from './header.module.scss'

type HeaderProps = {
  name: string
  photo?: string
  withBtn?: boolean
}
export const Header = ({ name, withBtn }: HeaderProps) => {
  return (
    <div className={s.header}>
      <Logo />
      {withBtn ? (
        <div>
          <Button variant={'secondary'}>Sign In</Button>
        </div>
      ) : (
        <div className={s.auth}>
          <Typography className={s.name} variant={'subtitle1'}>
            {name}
          </Typography>
          <DropDownAuth email={'dkishye@mail.ru'} name={name} />
        </div>
      )}
    </div>
  )
}
