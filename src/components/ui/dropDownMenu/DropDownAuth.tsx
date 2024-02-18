import { Out } from '@/components/assets/icons/Out'
import { Person } from '@/components/assets/icons/Person'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography/Typography'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropDown.module.scss'

type Props = {
  email: string
  name: string
}
export const DropDownAuth = ({ email, name }: Props) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={s.IconButton}>
          <Avatar title={'Av'} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align={'end'} className={s.DropdownMenuContent} sideOffset={5}>
          <DropdownMenu.Item>
            <Photo email={email} name={name} />
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
          <DropdownMenu.Item>
            <Button className={s.itemBox} variant={'link'}>
              <Person size={16} />
              <Typography variant={'caption'}>Edit</Typography>
            </Button>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
          <DropdownMenu.Item>
            <Button className={s.itemBox} variant={'link'}>
              <Out size={16} />
              <Typography variant={'caption'}>Sign Out</Typography>
            </Button>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

const Photo = ({ email, name }: Props) => {
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
