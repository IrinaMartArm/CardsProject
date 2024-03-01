import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { CardBox } from '@/components/ui/card'
import { ControlledCheckBox } from '@/components/ui/controlled/ControlledCheckBox'
import { ControlledTextField } from '@/components/ui/controlled/ControlledTextField'
import { Typography } from '@/components/ui/typography/Typography'
import { SignInFormData, useSignInForm } from '@/features/auth/hooks/useSignInForm'

import s from './SignInForm.module.scss'

interface Props {
  ClassName?: string
  isLoading: boolean
  onSubmit: (data: SignInFormData) => void
}
export const SignInForm = ({ ClassName, isLoading, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useSignInForm()

  return (
    <CardBox as={'form'} className={`${s.form} ${ClassName}`} onSubmit={handleSubmit(onSubmit)}>
      <Typography className={s.headerText} variant={'h1'}>
        Sign In
      </Typography>
      <ControlledTextField
        control={control}
        disabled={isLoading}
        errorMessage={errors.email?.message}
        label={'Email'}
        name={'email'}
        type={'email'}
      />
      <ControlledTextField
        control={control}
        disabled={isLoading}
        errorMessage={errors.password?.message}
        label={'Password'}
        name={'password'}
        type={'password'}
      />
      <ControlledCheckBox
        className={s.checkbox}
        control={control}
        disabled={isLoading}
        label={'Remember me'}
        name={'rememberMe'}
      />
      <Typography as={Link} className={s.forgotNav} to={'/forgot-password'} variant={'body2'}>
        Forgot Password?
      </Typography>
      <Button className={s.signInBtn} fullWidth type={'submit'}>
        Sign In
      </Button>
      <Typography className={s.signUpText} variant={'body2'}>
        Don`t have an account?
      </Typography>
      <Button
        as={Link}
        className={s.signUpNav}
        disabled={isLoading}
        to={'/sign-up'}
        variant={'link'}
      >
        Sign Up
      </Button>
    </CardBox>
  )
}
