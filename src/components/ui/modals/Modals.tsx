import { Close } from '@/components/assets/icons/Close'
import { Button } from '@/components/ui/button/Button'
import { CheckBox } from '@/components/ui/checkBox'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select/Select'
import { Typography } from '@/components/ui/typography/Typography'
import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modals.module.scss'

type ModalsProps = {
  buttons?: boolean
  title: string
}

export const Modals = ({ buttons, title }: ModalsProps) => {
  const classNames = {
    footer: clsx(s.footer, buttons && s.buttons),
    textFieldsBox: s.textFieldsBox,
    titleBox: s.titleBox,
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button onChange={() => {}} variant={'primary'}>
          {title}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.DialogOverlay} />
        <Dialog.Content className={s.DialogContent}>
          <div className={classNames.titleBox}>
            <Dialog.Title>
              <Typography variant={'h3'}>{title}</Typography>
            </Dialog.Title>
            <Dialog.Close asChild>
              <button aria-label={'Close'} className={'IconButton'} onChange={() => {}}>
                <Close />
              </button>
            </Dialog.Close>
          </div>
          <div className={classNames.textFieldsBox}>
            <fieldset className={s.Fieldset}>
              <Select className={s.fullWidth} items={[]} name={'select'} onChange={() => {}} />
            </fieldset>
            <fieldset className={s.Fieldset}>
              <Input fullWidth placeholder={'Input'} type={'text'} />
            </fieldset>
            <fieldset className={s.Fieldset}>
              <Input fullWidth placeholder={'Input'} type={'text'} />
            </fieldset>
            <fieldset className={s.Fieldset}>
              <CheckBox label={'Check-box'} />
            </fieldset>
            <div>
              {buttons ? (
                <div className={classNames.footer}>
                  <Button onChange={() => {}} variant={'secondary'}>
                    Button secondary
                  </Button>
                  <Dialog.Close asChild>
                    <Button onChange={() => {}} variant={'primary'}>
                      Button primary
                    </Button>
                  </Dialog.Close>
                </div>
              ) : (
                <div className={classNames.footer}>
                  <Dialog.Close asChild>
                    <Button onChange={() => {}} variant={'secondary'}>
                      Button secondary
                    </Button>
                  </Dialog.Close>
                </div>
              )}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
