import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  KeyboardEvent,
  ReactNode,
  forwardRef,
  useState,
} from 'react'

import { Close } from '@/components/assets/icons/Close'
import { Eye } from '@/components/assets/icons/Eye'
import { EyeOff } from '@/components/assets/icons/EyeOff'
import { Search } from '@/components/assets/icons/Search'
import { Typography } from '@/components/ui/typography/Typography'
import { clsx } from 'clsx'

import s from './input.module.scss'

type InputTypes = 'email' | 'password' | 'search' | 'text'

export type InputProps = {
  errorMessage?: string
  fullWidth?: boolean
  isShowButton?: boolean
  label?: ReactNode
  onClearClick?: (value: string) => void
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  type: InputTypes
  value?: string
} & ComponentPropsWithoutRef<'input'>
// onChange

const InputType = (
  type: InputTypes & Omit<ComponentPropsWithoutRef<'input'>, keyof InputProps>,
  showPassword: boolean
) => {
  if (type === 'password') {
    return showPassword ? 'text' : 'password'
  } else if (type === 'search') {
    return 'search'
  } else if (type === 'email') {
    return 'email'
  } else {
    return 'text'
  }
}

export const Input = forwardRef<ElementRef<'input'>, InputProps>(
  (
    {
      className,
      disabled,
      errorMessage,
      fullWidth,
      label,
      onChange,
      onClearClick,
      onEnter,
      type,
      value,
      ...rest
    },
    ref
  ) => {
    const showError = !!errorMessage && errorMessage.length > 0
    const [showPassword, setShowPassword] = useState(false)

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
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (onEnter && e.key === 'Enter') {
        onEnter(e)
      }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e)
      }
    }

    const onClearClickHandler = () => {
      if (onClearClick) {
        onClearClick('')
      }
    }

    const showPasswordHandler = () => {
      setShowPassword(!showPassword)
    }

    const isShowButton = type === 'search' && !!value

    return (
      <div className={s.box + ' ' + classNames.root}>
        <Typography variant={'body2'}>{label}</Typography>
        <div className={classNames.input_wrapper}>
          {type === 'search' && (
            <span className={s.iconStart}>
              <Search color={'var(--color-dark-100)'} size={20} />
            </span>
          )}
          <input
            className={classNames.input}
            disabled={disabled}
            onChange={onChangeHandler}
            onKeyDown={handleKeyDown}
            ref={ref}
            type={InputType(type, showPassword)}
            value={value}
            {...rest}
          />
          {type === 'password' && (
            <button className={s.iconStart} onClick={showPasswordHandler} type={'button'}>
              {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
            </button>
          )}
          {isShowButton && (
            <button className={s.iconEnd} onClick={onClearClickHandler} type={'button'}>
              {<Close color={'var(--color-light-100)'} size={20} />}
            </button>
          )}
        </div>
        <Typography className={s.errorMessage} variant={'error'}>
          {errorMessage}
        </Typography>
      </div>
    )
  }
)
