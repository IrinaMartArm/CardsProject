import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/ControlledTextField'
import { Typography } from '@/components/ui/typography/Typography'
import { passwordSchema } from '@/utils/Validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './CreateNewPassword.module.scss'

type PasswordForm = {
  password: string
}
type Props = { className?: string }

type PasswordValues = z.infer<typeof passwordSchema>

export const CreateNewPassword = ({ className }: Props) => {
  const classNames = {
    buttonBox: s.buttonBox,
    container: s.container,
    inputBox: clsx(s.inputBox, s.text),
    light: s.light,
    link: s.link,
    root: s.root,
  }

  const { control, handleSubmit } = useForm<PasswordValues>({
    defaultValues: { password: '' },
    resolver: zodResolver(passwordSchema),
  })

  const onSubmitHandler = (value: PasswordForm) => {
    console.log(value)
  }

  return (
    <Card as={'form'} className={`${s.root} ${className}`} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={classNames.root}>
        <div className={classNames.container}>
          <Typography variant={'h1'}>Create new password</Typography>
          <div className={classNames.inputBox}>
            <ControlledTextField
              control={control}
              fullWidth
              label={'CreateNewPassword'}
              name={'password'}
              type={'password'}
            />
            <Typography variant={'body2'}>
              Create new password and we will send you further instructions to email
            </Typography>
          </div>
          <div className={classNames.buttonBox}>
            <Button fullWidth type={'submit'} variant={'primary'}>
              <Typography variant={'body2'}>Create New Password</Typography>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
