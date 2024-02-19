import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import s from './dropDown.module.scss'

const DropdownRoot = forwardRef<
  ElementRef<typeof DropdownMenuRadix.Root>,
  ComponentPropsWithoutRef<typeof DropdownMenuRadix.Root> & {
    onOpenChange: () => void
    open: boolean
  }
>(({ children, onOpenChange, open, ...rest }) => {
  return <DropdownMenuRadix.Root {...rest} onOpenChange={onOpenChange} open={open} />
})

const DropdownMenuTrigger = forwardRef<
  ElementRef<typeof DropdownMenuRadix.Trigger>,
  ComponentPropsWithoutRef<typeof DropdownMenuRadix.Trigger> & {
    trigger: ReactNode
  }
>(({ className, trigger, ...rest }, ref) => (
  <DropdownMenuRadix.Trigger asChild ref={ref} {...rest} className={s.IconButton}>
    {trigger}
  </DropdownMenuRadix.Trigger>
))

DropdownMenuTrigger.displayName = DropdownMenuRadix.Trigger.displayName

const DropdownMenuSeparator = forwardRef<
  ElementRef<typeof DropdownMenuRadix.Separator>,
  ComponentPropsWithoutRef<typeof DropdownMenuRadix.Separator>
>(({ children, className, ...rest }, ref) => (
  <DropdownMenuRadix.Separator className={s.DropdownMenuSeparator} ref={ref} {...rest} />
))

DropdownMenuSeparator.displayName = DropdownMenuRadix.Separator.displayName

const DropdownMenuContent = forwardRef<
  ElementRef<typeof DropdownMenuRadix.Portal>,
  ComponentPropsWithoutRef<typeof DropdownMenuRadix.Portal> & { open: boolean }
>(({ children, open, ...rest }, ref) => {
  return (
    <>
      {/*{open && (*/}
      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content
          align={'end'}
          asChild
          className={s.DropdownMenuContent}
          onClick={event => event.stopPropagation()}
          ref={ref}
          sideOffset={5}
          {...rest}
        >
          {children}
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
      {/*)}*/}
    </>
  )
})

DropdownMenuContent.displayName = DropdownMenuRadix.Separator.displayName

const DropdownMenuItem = forwardRef<
  ElementRef<typeof DropdownMenuRadix.Item>,
  ComponentPropsWithoutRef<typeof DropdownMenuRadix.Item>
>(({ children, onSelect, ...rest }, ref) => {
  return (
    <DropdownMenuRadix.Item
      asChild
      className={s.DropdownMenuItem}
      onSelect={onSelect}
      ref={ref}
      {...rest}
    />
  )
})

DropdownMenuItem.displayName = DropdownMenuRadix.Item.displayName

export {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownRoot,
}

// export const DropdownMenu = DropdownMenuPrimitive.Root
// export const DropdownMenuTrigger = StyledTrigger
// export const DropdownMenuContent = StyledContent
// export const DropdownMenuItem = StyledItem
// export const DropdownMenuArrow = StyledArrow
