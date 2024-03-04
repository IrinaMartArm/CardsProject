import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { CardBox } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/ControlledTextField'
import { Typography } from '@/components/ui/typography/Typography'
import { SignUpFormValues, useSignUpForm } from '@/features/auth/hooks/useSignUpForm'
import { CatchingData } from '@/utils/handleErrorResponse'

import s from './SignUpForm.module.scss'

interface Props {
  isLoading: boolean
  onSubmit: (body: SignUpFormValues) => Promise<CatchingData | null>
}
export const SignUpForm = ({ isLoading, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useSignUpForm()

  const handleSubmitAction = (data: SignUpFormValues) => {
    onSubmit(data).then(error => {
      if (error && error.fieldErrors) {
        error.fieldErrors?.forEach(el => {
          setError(el.field as keyof SignUpFormValues, { message: el.message })
        })
      }
    })
  }

  return (
    <CardBox as={'form'} className={s.form} onSubmit={handleSubmit(handleSubmitAction)}>
      <Typography className={s.headerText} variant={'h1'}>
        Sign Up
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
      <ControlledTextField
        control={control}
        disabled={isLoading}
        errorMessage={errors.password?.message}
        label={'Confirm Password'}
        name={'confirmPassword'}
        type={'password'}
      />
      <Button className={s.signUpBtn} disabled={isLoading} fullWidth type={'submit'}>
        Sign Up
      </Button>
      <Typography className={s.haveAnAccountText} variant={'body2'}>
        Already have an account?
      </Typography>
      <Button as={Link} className={s.signInNav} disabled={isLoading} to={'/login'} variant={'link'}>
        Sign In
      </Button>
    </CardBox>
  )
}
