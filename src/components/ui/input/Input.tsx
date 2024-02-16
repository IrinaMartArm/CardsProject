import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  KeyboardEvent,
  ReactNode,
  forwardRef,
  useState,
} from 'react'

import { Close } from '@/components/assets/icons/Close'
import { Eye } from '@/components/assets/icons/Eye'
import { EyeOff } from '@/components/assets/icons/EyeOff'
import { Search } from '@/components/assets/icons/Search'
import { Label } from '@/components/ui/label/Label'
import { Typography } from '@/components/ui/typography/Typography'
import { clsx } from 'clsx'

import s from './input.module.scss'

type InputTypes = 'password' | 'search' | 'text'

export type InputProps = {
  errorMessage?: string
  fullWidth?: boolean
  isShowButton?: boolean
  label?: ReactNode
  onChange?: (value: string) => void
  onClearClick?: (value: string) => void
  onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  type: InputTypes
  value?: string
} & Omit<ComponentPropsWithoutRef<'input'>, 'onChange'>
// onChange

const InputType = (type: InputTypes, showPassword: boolean) => {
  if (type === 'password') {
    return showPassword ? 'text' : 'password'
  } else if (type === 'search') {
    return 'search'
  } else {
    return 'text'
  }
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      errorMessage,
      fullWidth,
      isShowButton = false,
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
        onChange(e.currentTarget.value)
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
  //           <Eye />
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
)
