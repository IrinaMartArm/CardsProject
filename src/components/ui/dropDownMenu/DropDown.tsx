import { More } from '@/components/assets/icons/More'
import { Pen } from '@/components/assets/icons/Pen'
import { Play } from '@/components/assets/icons/Play'
import { TrashBin } from '@/components/assets/icons/TrashBin'
import { Button } from '@/components/ui/button'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropDown.module.scss'

export const DropdownMenuDemo = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label={'Customise options'} className={s.IconButton}>
          <More />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align={'end'} className={s.DropdownMenuContent} sideOffset={5}>
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            <Button className={s.itemBox}>
              <Play size={16} />
              Learn
            </Button>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            <Button className={s.itemBox}>
              <Pen size={16} />
              Edit
            </Button>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            <Button className={s.itemBox} onClick={() => {}}>
              <TrashBin size={16} />
              Delete
            </Button>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
