import { Pen } from '@/components/assets/icons/Pen'
import { Play } from '@/components/assets/icons/Play'
import { TrashBin } from '@/components/assets/icons/TrashBin'

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
