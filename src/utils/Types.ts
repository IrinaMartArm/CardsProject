import { HTMLProps, LegacyRef, ReactNode } from 'react'

export type Option = {
  disabled: boolean
  label: string
  value: string
}

export type IconProps = {
  color?: string
  colorB?: string
  ref?: LegacyRef<SVGSVGElement>
  size?: number
} & Omit<HTMLProps<HTMLSpanElement>, 'color' | 'size'>

// DropDown
export type DropDownItemType = {
  foo: () => void
  icon: ReactNode
  separator: boolean
  text: string
}

export type Cover = File | null | string

export type DropDownItemsType = DropDownItemType[]
