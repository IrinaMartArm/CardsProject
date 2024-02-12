import { ComponentPropsWithoutRef, ElementRef, ElementType, ReactNode, forwardRef } from 'react'

import { PolymorphRef } from '@/components/types'

import s from './Button.module.scss'

export type Props<T extends ElementType> = {
  aheadIcon?: ReactNode
  as?: T
  behindIcon?: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'link' | 'primary' | 'primaryWithIcon' | 'secondary' | 'secondaryWithIcon' | 'tertiary'
} & ComponentPropsWithoutRef<T>

type ButtonComponent = <T extends ElementType = 'button'>(
  props: Props<T> & PolymorphRef<T>
) => ReactNode

export const Button: ButtonComponent = forwardRef(
  <T extends ElementType = 'button'>(
    {
      aheadIcon,
      as,
      behindIcon,
      children,
      className,
      fullWidth,
      variant = 'primary',
      ...rest
    }: Props<T>,
    ref: ElementRef<T>
  ) => {
    const Component: ElementType = as || 'button'

    return (
      <Component
        className={`${s[variant]} ${fullWidth ? s.fullWidth : ''} ${className}`}
        {...rest}
        ref={ref}
      >
        {aheadIcon}
        {children}
        {behindIcon}
      </Component>
    )
  }
)
