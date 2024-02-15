import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { ControlledInput } from '@/components/ui/controlled/ControlledInput'
import { Typography } from '@/components/ui/typography/Typography'
import { passwordSchema } from '@/utils/Validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './password.module.scss'

type PasswordForm = {
  password: string
}

type PasswordValues = z.infer<typeof passwordSchema>

const classNames = {
  buttonBox: s.buttonBox,
  container: s.container,
  inputBox: clsx(s.inputBox, s.text),
  light: s.light,
  link: s.link,
  root: s.root,
}

export const CreateNewPassword = () => {
  const { control, handleSubmit } = useForm<PasswordValues>({
    defaultValues: { password: '' },
    resolver: zodResolver(passwordSchema),
  })

  const onSubmitHandler = (value: PasswordForm) => {
    console.log(value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={classNames.root}>
        <div className={classNames.container}>
          <Typography variant={'h1'}>Create new password</Typography>
          <div className={classNames.inputBox}>
            <ControlledInput
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
            <Button type={'submit'} variant={'primary'}>
              Create New Password
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}
