import { Edit } from '@/components/assets/icons'
import { Play } from '@/components/assets/icons/Play'
import { TrashBin } from '@/components/assets/icons/TrashBin'
import { Button } from '@/components/ui/button'

import s from './table.module.scss'
export const IconsBlock = () => {
  return (
    <div className={s.icons}>
      <Button icon={<Play />} />
      <Button icon={<Edit />} />
      <Button icon={<TrashBin />} />
    </div>
  )
}
