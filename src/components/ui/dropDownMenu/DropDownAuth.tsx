import { Out } from '@/components/assets/icons/Out'
import { Person } from '@/components/assets/icons/Person'
import { Avatar } from '@/components/ui/avatar'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropDown.module.scss'

export const DropDownAuth = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={s.IconButton}>
          <Avatar title={'Av'} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align={'end'} className={s.DropdownMenuContent} sideOffset={5}>
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            <Photo />
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            <div className={s.itemBox}>
              <Person size={16} />
              Edit
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            <div className={s.itemBox}>
              <Out size={16} />
              Sign Out
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

const Photo = () => {
  return (
    <div className={s.photoBox}>
      <Avatar title={'Av'} />
      <div className={s.infoBox}>
        <div className={s.name}>Irina</div>
        <div className={s.mail}>nvhffh@ncb.com</div>
      </div>
    </div>
  )
}
