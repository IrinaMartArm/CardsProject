import { KeyboardArrowLeft } from '@/images/icons/svgs/KeyboardArrowLeft'

import s from './pagination.module.scss'

type NextButtonType = {
  disabled?: boolean
  onClick: () => void
}
export const LeftArrowButton = ({ disabled, onClick }: NextButtonType) => {
  return (
    <button className={s.arrowButton} disabled={disabled} onClick={onClick}>
      <KeyboardArrowLeft
        color={disabled ? 'var(--color-dark-100)' : 'var(--color-light-100)'}
        size={20}
      />
    </button>
  )
}
