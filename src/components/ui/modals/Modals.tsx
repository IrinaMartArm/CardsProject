import { ReactNode } from 'react'

import { Close } from '@/components/assets/icons/Close'
import { Button } from '@/components/ui/button/Button'
import { Typography } from '@/components/ui/typography/Typography'
import * as Dialog from '@radix-ui/react-dialog'

import s from './modals.module.scss'

type ModalsProps = {
  buttons?: boolean
  children: ReactNode
  closeButton: boolean
  onOpenChange: () => void
  open?: boolean
  title: string
}

export const Modals = ({ children, closeButton, onOpenChange, open, title }: ModalsProps) => {
  return (
    <Dialog.Root onOpenChange={onOpenChange} open={open}>
      <Dialog.Trigger asChild>
        <Button onChange={() => {}} variant={'primary'}>
          <Typography variant={'body2'}>{title}</Typography>
        </Button>
      </Dialog.Trigger>
      {open && (
        <Dialog.Portal>
          <Dialog.Overlay className={s.DialogOverlay} />
          <Dialog.Content className={s.DialogContent}>
            <div className={s.titleBox}>
              <Dialog.Title>
                <Typography variant={'h2'}>{title}</Typography>
              </Dialog.Title>
              {closeButton && (
                <Dialog.Close asChild>
                  <button aria-label={'Close'} className={'IconButton'} onChange={() => {}}>
                    <Close />
                  </button>
                </Dialog.Close>
              )}
            </div>
            <div className={s.contentBox}>{children}</div>
          </Dialog.Content>
        </Dialog.Portal>
      )}
    </Dialog.Root>
  )
}
