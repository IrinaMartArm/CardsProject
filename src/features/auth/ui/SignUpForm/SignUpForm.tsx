import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/ControlledTextField'
import { Typography } from '@/components/ui/typography/Typography'
import { signUpSchema } from '@/utils/Validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignUpForm.module.scss'

type FormValues = z.infer<typeof signUpSchema>

interface Props {
  className?: string
}
export const SignUpForm = ({ className }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Card as={'form'} className={`${s.form} ${className}`} onSubmit={handleSubmit(onSubmit)}>
      <Typography className={s.headerText} variant={'h1'}>
        Sign Up
      </Typography>
      <ControlledTextField
        control={control}
        errorMessage={errors.email?.message}
        label={'Email'}
        name={'email'}
        type={'email'}
      />
      <ControlledTextField
        control={control}
        errorMessage={errors.password?.message}
        label={'Password'}
        name={'password'}
        type={'password'}
      />
      <ControlledTextField
        control={control}
        errorMessage={errors.password?.message}
        label={'Confirm password'}
        name={'confirmPassword'}
        type={'password'}
      />
      <Button className={s.signUpBtn} fullWidth type={'submit'}>
        Sign Up
      </Button>
      <Typography className={s.haveAnAccountText} variant={'body2'}>
        Already have an account?
      </Typography>
      <Typography className={s.signInNav} variant={'subtitle-link'}>
        Sign In
      </Typography>
    </Card>
  )
}
