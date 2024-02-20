import { useState } from 'react'

import { Out } from '@/components/assets/icons/Out'
import { Person } from '@/components/assets/icons/Person'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropDownMenu/Test'
import { Typography } from '@/components/ui/typography/Typography'

import s from './dropDown.module.scss'

type Props = {
  email: string
  name: string
}

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

export const DropDownAuth = ({ email, name }: Props) => {
  const [open, setOpen] = useState(false)
  const onOpen = () => setOpen(!open)

  return (
    <DropdownMenu onOpenChange={onOpen} open={open}>
      <DropdownMenuTrigger>
        <Avatar title={'AV'} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align={'end'} sideOffset={5}>
        <DropdownMenuItem>
          <Photo email={email} name={name} />
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button className={s.itemBox} variant={'link'}>
            <Person size={16} />
            <Typography variant={'caption'}>Edit</Typography>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button className={s.itemBox} variant={'link'}>
            <Out size={16} />
            <Typography variant={'caption'}>Sign Out</Typography>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
