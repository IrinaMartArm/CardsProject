import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography/Typography'
import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from '@/components/ui/modals/modals.module.scss'

type Props = {
  SecondaryTitle: string
  buttons: boolean
  onChangePrimary: () => void
  onChangeSecondary: () => void
  primaryTitle: string
}
export const ModalsFooter = ({
  SecondaryTitle,
  buttons,
  onChangePrimary,
  onChangeSecondary,
  primaryTitle,
}: Props) => {
  const classNames = {
    footer: clsx(s.footer, buttons && s.buttons),
  }

  return (
    <div>
      {buttons ? (
        <div className={classNames.footer}>
          <Button onChange={onChangeSecondary} variant={'secondary'}>
            <Typography variant={'body2'}>{SecondaryTitle}</Typography>
          </Button>
          <Dialog.Close asChild>
            <Button onChange={onChangePrimary} variant={'primary'}>
              <Typography variant={'body2'}>{primaryTitle}</Typography>
            </Button>
          </Dialog.Close>
        </div>
      ) : (
        <div className={classNames.footer}>
          <Dialog.Close asChild>
            <Button onChange={onChangeSecondary} variant={'secondary'}>
              <Typography variant={'body2'}>{SecondaryTitle}</Typography>
            </Button>
          </Dialog.Close>
        </div>
      )}
    </div>
  )
}
