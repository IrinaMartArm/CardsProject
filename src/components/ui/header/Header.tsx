import { ReactNode } from 'react'

import { Out, Person } from '@/components/assets/icons'
import { Logo } from '@/components/assets/icons/Logo'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { DropDown, DropdownItem, DropdownItemWithIcon } from '@/components/ui/dropDownMenu/DropDown'
import { Typography } from '@/components/ui/typography/Typography'

import s from './header.module.scss'

type HeaderProps = {
  name: string
  photo?: string
  withBtn?: boolean
}

type DropDownItemType = {
  foo: () => void
  icon: ReactNode
  separator: boolean
  text: string
}
type DropDownItemsType = DropDownItemType[]

const dropDownItems: DropDownItemsType = [
  { foo: () => {}, icon: <Person />, separator: true, text: 'My Profile' },
  { foo: () => {}, icon: <Out />, separator: false, text: 'Sign Out' },
]

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
          <DropDown trigger={<Avatar title={name} />}>
            <Card className={s.dropdown}>
              <DropdownItem onSelect={() => {}} separator>
                <InfoItem email={'jfhfg@mn.ru'} name={'Bob'} />
              </DropdownItem>
              {dropDownItems.map((el, i) => {
                return (
                  <DropdownItemWithIcon
                    icon={el.icon}
                    key={i}
                    onSelect={el.foo}
                    separator={el.separator}
                    text={el.text}
                  />
                )
              })}
            </Card>
          </DropDown>
        </div>
      )}
    </div>
  )
}

type Props = {
  email: string
  name: string
}

export const InfoItem = ({ email, name }: Props) => {
  return (
    <div className={s.photoBox}>
      <Avatar title={'Av'} />
      <div className={s.infoBox}>
        <Typography variant={'subtitle2'}>{name}</Typography>
        <Typography className={s.mail} variant={'caption'}>
          {email}
        </Typography>
      </div>
    </div>
  )
}
