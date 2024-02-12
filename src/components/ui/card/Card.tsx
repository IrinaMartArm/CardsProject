import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './card.module.scss'

type CardProps<T extends ElementType> = {
  ClassName?: string
  as?: T
  children?: ReactNode
} & ComponentPropsWithoutRef<T>

export const Card = <T extends ElementType = 'div'>(
  props: CardProps<T> & Omit<CardProps<T>, keyof ComponentPropsWithoutRef<T>>
) => {
  const { ClassName, as: Component = 'div', children, ...rest } = props

  return (
    <Component className={`${s.card}`} {...rest}>
      <div>{children}</div>
    </Component>
  )
}
