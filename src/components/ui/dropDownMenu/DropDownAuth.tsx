import { AuthPhoto } from '@/components/ui/authPhoto/AuthPhoto'
import { Out } from '@/images/icons/svgs/Out'
import { Person } from '@/images/icons/svgs/Person'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropDown.module.scss'

import photo from '../../../images/photo 1.png'

export const DropDownAuth = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={s.IconButton}>
          <AuthPhoto photo={photo} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
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
      {/*<div className={s.photoWrapper}>*/}
      {/*  <img alt={''} className={s.photo} src={photo} />*/}
      {/*</div>*/}
      <AuthPhoto photo={photo} />
      <div className={s.infoBox}>
        <div className={s.name}>Irina</div>
        <div className={s.mail}>nvhffh@ncb.com</div>
      </div>
    </div>
  )
}
