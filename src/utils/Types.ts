import { HTMLProps, LegacyRef } from 'react'

export type AnswerVariantType = {
  disabled: boolean
  id: string
  variant: string
}

export type IconProps = {
  color?: string
  colorB?: string
  ref?: LegacyRef<SVGSVGElement>
  size?: number
} & Omit<HTMLProps<HTMLSpanElement>, 'color' | 'size'>
