import { ComponentPropsWithoutRef, ElementRef, FC, ReactNode, forwardRef, useState } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropDown.module.scss'

import { Typography } from '../typography/Typography'

export type DropdownProps = {
  align?: 'center' | 'end' | 'start'
  children: ReactNode
  className?: string
  trigger?: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root>

export const DropDown = forwardRef<ElementRef<typeof DropdownMenuRadix.Root>, DropdownProps>(
  (props, ref) => {
    const { align = 'end', children, className, trigger, ...rest } = props
    const [open, setOpen] = useState(false)

    return (
      <DropdownMenuRadix.Root onOpenChange={setOpen} open={open} {...rest}>
        <DropdownMenuRadix.Trigger asChild>{trigger}</DropdownMenuRadix.Trigger>
        {open && (
          <DropdownMenuRadix.Portal forceMount>
            <DropdownMenuRadix.Content
              align={align}
              className={s.content}
              forceMount
              onClick={event => event.stopPropagation()}
              ref={ref}
              sideOffset={10}
            >
              {children}
            </DropdownMenuRadix.Content>
          </DropdownMenuRadix.Portal>
        )}
      </DropdownMenuRadix.Root>
    )
  }
)

export type DropdownItemProps = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  onSelect: (event: Event) => void
  separator: boolean
} & ComponentPropsWithoutRef<typeof DropdownMenuRadix.Item>

export const DropdownItem = forwardRef<
  ElementRef<typeof DropdownMenuRadix.Item>,
  DropdownItemProps
>(({ children, className, disabled, onSelect, separator }, ref) => {
  const classNames = {
    item: clsx(s.item, className),
  }

  return (
    <>
      <DropdownMenuRadix.Item
        className={classNames.item}
        disabled={disabled}
        onSelect={onSelect}
        ref={ref}
      >
        {children}
      </DropdownMenuRadix.Item>
      {separator && <DropdownMenuRadix.Separator className={s.DropdownMenuSeparator} />}
    </>
  )
})

export type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'div'>

export const DropdownItemWithIcon: FC<DropdownItemWithIconProps> = ({
  className,
  disabled,
  icon,
  onSelect,
  separator,
  style,
  text,
  ...rest
}) => {
  const classNames = {
    item: clsx(s.item, className),
    itemIcon: s.itemIcon,
    itemsBox: s.itemsBox,
  }

  return (
    <>
      <DropdownMenuRadix.Item
        asChild
        className={classNames.item}
        disabled={disabled}
        onSelect={onSelect}
        style={style}
        {...rest}
      >
        <div className={classNames.itemsBox}>
          <div className={classNames.itemIcon}>{icon}</div>
          <Typography className={s.text} variant={'caption'}>
            {text}
          </Typography>
        </div>
      </DropdownMenuRadix.Item>
      {separator && <DropdownMenuRadix.Separator className={s.DropdownMenuSeparator} />}
    </>
  )
}
