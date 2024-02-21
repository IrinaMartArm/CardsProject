import { ReactNode } from 'react'

import { Out } from '@/components/assets/icons/Out'
import { Person } from '@/components/assets/icons/Person'
import { Avatar } from '@/components/ui/avatar'
// import { Button } from '@/components/ui/button'
import { Dropdown, DropdownItemWithIcon } from '@/components/ui/dropDownMenu/DropDown'
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
import { Card } from '@/components/ui/card'
// } from '@/components/ui/dropDownMenu/Test'
import { Typography } from '@/components/ui/typography/Typography'

import s from './dropDown.module.scss'

type Props = {
  email: string
  name: string
}

type DropDownItemType = {
  foo: () => void
  icon: ReactNode
  text: string
}
type DropDownItemsType = DropDownItemType[]

const dropDownItems: DropDownItemsType = [
  { foo: () => {}, icon: <Person />, text: 'My Profile' },
  { foo: () => {}, icon: <Out />, text: 'Sign Out' },
]

export const Photo = ({ email, name }: Props) => {
  return (
    <div className={s.photoBox}>
      <Avatar title={'Av'} />
      <div className={s.infoBox}>
        <Typography variant={'subtitle1'}>{name}</Typography>
        <Typography className={s.mail} variant={'caption'}>
          {email}
        </Typography>
      </div>
    </div>
  )
}

export const DropDownAuth = ({ name }: Props) => {
  // const [open, setOpen] = useState(false)
  // const onOpen = () => setOpen(!open)

  return (
    <Dropdown trigger={<Avatar title={name} />}>
      <Card style={{ padding: '12px', width: 'fit-content' }}>
        {dropDownItems.map((el, i) => {
          return <DropdownItemWithIcon icon={el.icon} key={i} onSelect={el.foo} text={el.text} />
        })}
      </Card>
    </Dropdown>
  )
}
