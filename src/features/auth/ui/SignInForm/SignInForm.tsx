import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledCheckBox } from '@/components/ui/controlled/ControlledCheckBox'
import { ControlledTextField } from '@/components/ui/controlled/ControlledTextField'
import { Typography } from '@/components/ui/typography/Typography'
import { loginSchema } from '@/utils/Validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignInForm.module.scss'

type FormValues = z.infer<typeof loginSchema>

interface Props {
  ClassName?: string
}
export const SignInForm = ({ ClassName }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Card as={'form'} className={`${s.form} ${ClassName}`} onSubmit={handleSubmit(onSubmit)}>
      <Typography className={s.headerText} variant={'h1'}>
        Sign In
      </Typography>
      <ControlledTextField
        control={control}
        errorMessage={errors.email?.message}
        label={'Email'}
        name={'email'}
        type={'text'}
      />
      <ControlledTextField
        className={s.input}
        control={control}
        errorMessage={errors.password?.message}
        label={'Password'}
        name={'password'}
        type={'password'}
      />
      <ControlledCheckBox
        className={s.checkbox}
        control={control}
        label={'remember me'}
        name={'rememberMe'}
      />
      <Typography className={s.forgotNav} variant={'body2'}>
        Forgot Password?
      </Typography>
      <Button className={s.signInBtn} fullWidth type={'submit'}>
        Sign In
      </Button>
      <Typography className={s.signUpText} variant={'body2'}>
        Don`t have an account?
      </Typography>
      <Typography className={s.signUpNav} variant={'subtitle-link'}>
        Sign Up
      </Typography>
    </Card>
  )
}
