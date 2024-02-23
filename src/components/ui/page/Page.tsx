import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import s from './Page.module.scss'

type Props = {
  mt?: CSSProperties['marginTop']
} & ComponentPropsWithoutRef<'div'>

export const Page = forwardRef<ElementRef<'div'>, Props>(
  ({ className, mt = '36px', style, ...rest }, ref) => {
    return (
      <div
        className={`${s.page} ${className}`}
        ref={ref}
        style={{ marginTop: mt, ...style }}
        {...rest}
      />
    )
  }
)
