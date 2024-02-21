import { ComponentPropsWithoutRef, FC, ReactNode, useState } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'

import s from './dropDown.module.scss'

import { Typography } from '../typography/Typography'

export type DropdownProps = {
  align?: 'center' | 'end' | 'start'
  children: ReactNode
  className?: string
  trigger?: ReactNode
}

export const Dropdown = ({ align = 'end', children, className, trigger }: DropdownProps) => {
  const [open, setOpen] = useState(false)

  const classNames = {
    arrow: s.arrow,
    arrowBox: s.arrowBox,
    button: s.button,
    content: clsx(s.content, className),
    itemsBox: s.itemsBox,
  }

  return (
    <DropdownMenuRadix.Root onOpenChange={setOpen} open={open}>
      <DropdownMenuRadix.Trigger asChild>
        {trigger ?? <button className={classNames.button}>{trigger}</button>}
      </DropdownMenuRadix.Trigger>
      {open && (
        <DropdownMenuRadix.Portal forceMount>
          <DropdownMenuRadix.Content
            align={align}
            asChild
            className={classNames.content}
            forceMount
            onClick={event => event.stopPropagation()}
            sideOffset={8}
          >
            <DropdownMenuRadix.Arrow asChild className={classNames.arrowBox}>
              <div className={classNames.arrow} />
            </DropdownMenuRadix.Arrow>
            <div className={classNames.itemsBox}>{children}</div>
          </DropdownMenuRadix.Content>
        </DropdownMenuRadix.Portal>
      )}
    </DropdownMenuRadix.Root>
  )
}

export type DropdownItemProps = {
  children?: ReactNode
  className?: string
  disabled?: boolean
  onSelect: (event: Event) => void
}

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  className,
  disabled,
  onSelect,
}) => {
  const classNames = {
    item: clsx(s.item, className),
  }

  return (
    <DropdownMenuRadix.Item
      asChild
      className={classNames.item}
      disabled={disabled}
      onSelect={onSelect}
    >
      {children}
    </DropdownMenuRadix.Item>
  )
}

export type DropdownItemWithIconProps = Omit<DropdownItemProps, 'children'> & {
  icon: ReactNode
  text: string
} & ComponentPropsWithoutRef<'div'>

export const DropdownItemWithIcon: FC<DropdownItemWithIconProps> = ({
  className,
  disabled,
  icon,
  onSelect,
  style,
  text,
  ...rest
}) => {
  const classNames = {
    item: clsx(s.item, className),
    itemIcon: s.itemIcon,
  }

  return (
    <DropdownMenuRadix.Item
      asChild
      className={classNames.item}
      disabled={disabled}
      onClick={event => event.stopPropagation()}
      onSelect={onSelect}
      style={style}
      {...rest}
    >
      <div className={classNames.itemIcon}>{icon}</div>
      <Typography variant={'caption'}>{text}</Typography>
    </DropdownMenuRadix.Item>
  )
}
