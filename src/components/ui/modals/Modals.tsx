import { Button } from '@/components/ui/button'
import { CheckBox } from '@/components/ui/checkBox'
import { Input } from '@/components/ui/input'
import Select from '@/components/ui/select/Select'
import { Close } from '@/images/icons/svgs/Close'
import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import s from './modals.module.scss'

type ModalsProps = {
  buttons?: boolean
}
export const Modals = ({ buttons }: ModalsProps) => {
  const classNames = {
    footer: clsx(s.footer, buttons && s.buttons),
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={s.ButtonV}>
          Title <Close />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.DialogOverlay} />
        <Dialog.Content className={s.DialogContent}>
          <fieldset className={s.Fieldset}>
            <Select
              className={s.fullWidth}
              items={[]}
              onChange={() => {}}
              placeholder={'something'}
            />
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
                <Button variant={'secondary'}>Button secondary</Button>
                <Dialog.Close asChild>
                  <Button variant={'primary'}>Button primary</Button>
                </Dialog.Close>
              </div>
            ) : (
              <div className={classNames.footer}>
                <Dialog.Close asChild>
                  <Button variant={'secondary'}>Button secondary</Button>
                </Dialog.Close>
              </div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
