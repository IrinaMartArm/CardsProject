import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/ControlledTextField'
import { Typography } from '@/components/ui/typography/Typography'
import { passwordSchema } from '@/utils/Validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './CreateNewPassword.module.scss'

type PasswordForm = {
  password: string
}

type PasswordValues = z.infer<typeof passwordSchema>

export const CreateNewPassword = () => {
  const { control, handleSubmit } = useForm<PasswordValues>({
    defaultValues: { password: '' },
    resolver: zodResolver(passwordSchema),
  })

  const onSubmitHandler = (value: PasswordForm) => {
    console.log(value)
  }

  return (
    <Card as={'form'} onSubmit={handleSubmit(onSubmitHandler)}>
      <Typography className={s.title} variant={'h1'}>
        Create new password
      </Typography>
      <ControlledTextField
        control={control}
        fullWidth
        label={'CreateNewPassword'}
        name={'password'}
        type={'password'}
      />
      <Typography className={s.subtitle} variant={'body2'}>
        Create new password and we will send you further instructions to email
      </Typography>
      <Button fullWidth type={'submit'} variant={'primary'}>
        <Typography variant={'body2'}>Create New Password</Typography>
      </Button>
    </Card>
  )
}
