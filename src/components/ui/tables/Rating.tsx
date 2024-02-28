import { Star, StarBorder } from '@/components/assets/icons'

import s from './table.module.scss'
export type RatingValueType = number

type PropsType = {
  onClick: (value: RatingValueType) => void
  value: RatingValueType
}

export const Rating = (props: PropsType) => {
  return (
    <div className={s.stars}>
      {props.value > 0 ? <Star /> : <StarBorder />}
      {props.value > 1 ? <Star /> : <StarBorder />}
      {props.value > 2 ? <Star /> : <StarBorder />}
      {props.value > 3 ? <Star /> : <StarBorder />}
      {props.value > 4 ? <Star /> : <StarBorder />}
    </div>
  )
}
