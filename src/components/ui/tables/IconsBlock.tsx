import { Pen } from '@/images/icons/svgs/Pen'
import { Play } from '@/images/icons/svgs/Play'
import { TrashBin } from '@/images/icons/svgs/TrashBin'

import s from './table.module.scss'
export const IconsBlock = () => {
  return (
    <div className={s.icons}>
      <Play />
      <Pen />
      <TrashBin />
    </div>
  )
}
