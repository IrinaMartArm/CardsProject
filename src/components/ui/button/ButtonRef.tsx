import { ComponentPropsWithoutRef, ElementType, ReactNode, Ref, forwardRef } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
  fullWidth?: boolean
  variant?: 'link' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

const ButtonWithoutRef = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
  ref: Ref<T>
) => {
  const {
    as: Component = 'button',
    children,
    className,
    fullWidth,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
      ref={ref as Ref<HTMLButtonElement>}
      {...rest}
    >
      {/*<div className={`${s.box}`}>{children}</div>*/}
      {children}
    </Component>
  )
}

export const ButtonRef = forwardRef(ButtonWithoutRef)
