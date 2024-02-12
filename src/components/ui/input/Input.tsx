import { ComponentPropsWithoutRef, KeyboardEvent, ReactNode } from 'react'

import { Label } from '@/components/ui/label/Label'
import { Typography } from '@/components/ui/tipography/Typography'
import { Close } from '@/images/icons/svgs/Close'
import { Search } from '@/images/icons/svgs/Search'
import { Visibility } from '@/images/icons/svgs/Visibility'
import { clsx } from 'clsx'

import s from './input.module.scss'

export type InputProps = {
  errorMessage?: string
  fullWidth?: boolean
  isShowButton?: boolean
  label?: ReactNode
  onClearClick?: () => void
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  type: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>
export const Input = (props: InputProps) => {
  const {
    className,
    disabled,
    errorMessage,
    fullWidth,
    isShowButton = false,
    label,
    onClearClick,
    onEnter,
    onKeyDown,
    type,
    ...rest
  } = props
  const showError = !!errorMessage && errorMessage.length > 0

  const classNames = {
    clearButton: s.clearButton,
    input: clsx(s.input, showError && s.error, disabled ? s.disabled : ''),
    input_wrapper: clsx(
      s.input_wrapper,
      disabled && s.disabled,
      showError && s.error,
      `${s[type]}`,
      fullWidth && s.fullWidth
    ),
    inputWithStart: clsx(s.inputWithStart, showError && s.error, disabled ? s.disabled : ''),
    label: clsx(disabled ? s.labelDisable : s.label),
    root: clsx(s.box, disabled ? s.disabled : '', className),
  }

  // const isShowButton = true
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (onEnter && e.key === 'Enter') {
      onEnter(e)
    }
    onKeyDown?.(e)
  }

  {
    return (
      <div className={s.box}>
        <span className={classNames.label}>
          <Label label={label} />
        </span>
        <div className={classNames.input_wrapper}>
          {type === 'search' && (
            <span className={s.iconStart}>
              <Search color={'var(--color-dark-100)'} size={20} />
            </span>
          )}
          <input
            className={classNames.input}
            disabled={disabled}
            onKeyDown={handleKeyDown}
            type={type}
            {...rest}
          />
          {type === 'password' && (
            <span className={s.iconStart}>
              <Visibility size={20} />
            </span>
          )}
          {isShowButton && (
            <button className={s.iconEnd} onClick={onClearClick} type={'button'}>
              {<Close color={'var(--color-light-100)'} size={20} />}
            </button>
          )}
        </div>
        {showError && <Typography variant={'error'}>{errorMessage}</Typography>}
      </div>
    )
  }
  // if (type === 'password') {
  //   return (
  //     <div className={s.box}>
  //       <span className={classNames.label}>
  //         <Label label={label} />
  //       </span>
  //       <div className={s.input_wrapper}>
  //         <input
  //           className={classNames.input}
  //           onKeyDown={handleKeyDown}
  //           type={type}
  //           {...rest}
  //           disabled
  //         />
  //         <span className={s.iconEnd}>
  //           <Visibility />
  //         </span>
  //       </div>
  //       {showError && <Typography.Error>{errorMessage}</Typography.Error>}
  //     </div>
  //   )
  // }

  // return (
  //   <div className={s.box}>
  //     <span className={classNames.label}>
  //       <Label label={label} />
  //     </span>
  //     <div className={s.input_wrapper}>
  //       <input className={classNames.input} onKeyDown={handleKeyDown} type={type} {...rest} />
  //     </div>
  //     {showError && <Typography.Error>{errorMessage}</Typography.Error>}
  //   </div>
  // )
}
