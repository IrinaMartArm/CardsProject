import { KeyboardArrowRight } from '@/images/icons/svgs/KeyboardArrowRight'

import s from './pagination.module.scss'

type NextButtonType = {
  disabled?: boolean
  onClick: () => void
}
export const RightArrowButton = ({ disabled, onClick }: NextButtonType) => {
  return (
    <button className={s.arrowButton} disabled={disabled} onClick={onClick}>
      <KeyboardArrowRight
        color={disabled ? 'var(--color-dark-100)' : 'var(--color-light-100)'}
        size={20}
      />
    </button>
  )
}
