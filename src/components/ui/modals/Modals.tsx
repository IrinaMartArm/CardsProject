import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Close } from '@/components/assets/icons'
import { IconButton } from '@/components/ui/IconButton'
import { Card } from '@/components/ui/card/Card'
import { Typography } from '@/components/ui/typography/Typography'
import * as RadixModal from '@radix-ui/react-dialog'

import s from './Modals.module.scss'

import { ModalClose } from './ModalClose'

export type Props = {
  className?: string
  title?: string
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof RadixModal.Root>

export const Modal = forwardRef<ElementRef<typeof RadixModal.Root>, Props>((props, ref) => {
  const { children, className, title, trigger, ...rest } = props

  return (
    <RadixModal.Root {...rest}>
      <RadixModal.Trigger asChild>{trigger}</RadixModal.Trigger>
      <RadixModal.Portal>
        <RadixModal.Overlay className={s.overlay} />
        <RadixModal.Content asChild className={`${s.main} ${className}`} ref={ref}>
          <Card style={{ padding: '0' }}>
            {title && (
              <div className={s.title}>
                <Typography as={'h2'} variant={'h2'}>
                  {title}
                </Typography>
                <ModalClose>
                  <IconButton icon={<Close />} />
                </ModalClose>
              </div>
            )}
            {children}
          </Card>
        </RadixModal.Content>
      </RadixModal.Portal>
    </RadixModal.Root>
  )
})
