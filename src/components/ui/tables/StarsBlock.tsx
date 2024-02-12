import { Star } from '@/images/icons/svgs/Star'
import { StarBorder } from '@/images/icons/svgs/StarBorder'

import s from './table.module.scss'

const stars = [
  { checked: true },
  { checked: true },
  { checked: true },
  { checked: false },
  { checked: false },
]

export const StarsBlock = () => {
  return (
    <div className={s.stars}>
      {stars.map((s, index) => (
        <StarItem key={index} selected={s.checked} />
      ))}
    </div>
  )
}

type StarItemType = {
  selected: boolean
}
const StarItem = ({ selected }: StarItemType) => {
  return <span>{selected ? <Star size={16} /> : <StarBorder size={16} />}</span>
}
