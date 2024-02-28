import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/ControlledTextField'
import { Typography } from '@/components/ui/typography/Typography'
import {
  ForgotPasswordFormData,
  useForgotPassword,
} from '@/features/auth/hooks/useForgotPasswordForm'
import { CatchingData } from '@/utils/handleErrorResponse'

import s from './ForgotPasswordForm.module.scss'

interface Props {
  className?: string
  isLoading: boolean
  onSubmit: (data: ForgotPasswordFormData) => Promise<CatchingData | undefined>
}

export const ForgotPasswordForm = ({ className, isLoading, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForgotPassword()
  const handleSubmitAction = (data: ForgotPasswordFormData) => {
    onSubmit(data).then(error => {
      if (error && error.fieldErrors) {
        error.fieldErrors?.forEach(el => {
          setError(el.field as keyof ForgotPasswordFormData, { message: el.message })
        })
      }
    })
  }

  return (
    <Card
      as={'form'}
      className={`${s.root} ${className}`}
      onSubmit={handleSubmit(handleSubmitAction)}
    >
      <Typography className={s.title} variant={'h1'}>
        Forgot your password?
      </Typography>
      <ControlledTextField
        control={control}
        errorMessage={errors?.email?.message}
        label={'Email'}
        name={'email'}
        type={'email'}
      />
      <Typography className={s.subtitle} variant={'body2'}>
        Enter your email address and we will send you further instructions
      </Typography>
      <Button disabled={isLoading} fullWidth type={'submit'} variant={'primary'}>
        Send Instructions
      </Button>
      <Typography className={s.subtitle2} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Button as={Link} className={s.link} disabled={isLoading} to={'/login'} variant={'link'}>
        Try logging in
      </Button>
    </Card>
  )
}
