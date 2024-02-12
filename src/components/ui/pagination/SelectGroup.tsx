import { items } from '@/App'
import Select from '@/components/ui/select/Select'
import { Typography } from '@/components/ui/tipography/Typography'

import s from './pagination.module.scss'
export const SelectGroup = () => {
  return (
    <div className={s.selectWrapper}>
      <Typography variant={'body2'}>Показать</Typography>
      <Select items={items} onChange={() => {}} placeholder={'100'} />
      <Typography variant={'body2'}>на странице</Typography>
    </div>
  )
}
