import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/ControlledTextField'
import { Typography } from '@/components/ui/typography/Typography'
import {
  CreateNewPasswordFormValues,
  useCreateNewPasswordForm,
} from '@/features/auth/hooks/useCreateNewPasswordForm'
import { CatchingData } from '@/utils/handleErrorResponse'

import s from './CreateNewPasswordForm.module.scss'

type Props = {
  isLoading: boolean
  onSubmit: (data: CreateNewPasswordFormValues) => Promise<CatchingData | undefined>
}

export const CreateNewPasswordForm = ({ isLoading, onSubmit }: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setError,
  } = useCreateNewPasswordForm()

  const handleSubmitAction = (data: CreateNewPasswordFormValues) => {
    onSubmit(data).then(error => {
      if (error && error.fieldErrors) {
        error.fieldErrors?.forEach(el => {
          setError(el.field as keyof CreateNewPasswordFormValues, { message: el.message })
        })
      }
    })
  }

  return (
    <Card as={'form'} onSubmit={handleSubmit(handleSubmitAction)}>
      <Typography className={s.title} variant={'h1'}>
        Create new password
      </Typography>
      <ControlledTextField
        control={control}
        errorMessage={errors.password?.message}
        fullWidth
        label={'Password'}
        name={'password'}
        type={'password'}
      />
      <Typography className={s.subtitle} variant={'body2'}>
        Create new password and we will send you further instructions to email
      </Typography>
      <Button disabled={isLoading} fullWidth type={'submit'} variant={'primary'}>
        Create New Password
      </Button>
    </Card>
  )
}
