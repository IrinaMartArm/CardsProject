import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/ControlledTextField'
import { Typography } from '@/components/ui/typography/Typography'
import { emailSchema } from '@/utils/Validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './password.module.scss'

type EmailValues = z.infer<typeof emailSchema>

type Props = {
  className?: string
}

export const ForgotPassword = ({ className }: Props) => {
  const classNames = {
    buttonBox: s.buttonBox,
    container: s.container,
    inputBox: clsx(s.inputBox, s.text),
    light: s.light,
    link: s.link,
  }

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<EmailValues>({
    defaultValues: { email: '' },
    resolver: zodResolver(emailSchema),
  })

  const onSubmitHandler = (value: EmailValues) => {
    console.log(value)
  }

  const onClickHandler = () => {}

  return (
    <Card as={'form'} className={`${s.root} ${className}`} onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={classNames.container}>
        <Typography variant={'h1'}>Forgot your password?</Typography>
        <div className={classNames.inputBox}>
          <ControlledTextField
            control={control}
            errorMessage={errors.email?.message}
            label={'Email'}
            name={'email'}
            type={'text'}
          />
          <Typography variant={'body2'}>
            Enter your email address and we will send you further instructions{' '}
          </Typography>
        </div>
        <div className={classNames.buttonBox}>
          <Button type={'submit'} variant={'primary'}>
            <Typography variant={'body2'}>Send Instructions</Typography>
          </Button>
          <Typography className={classNames.light} variant={'body2'}>
            Did you remember your password?
          </Typography>
          <Button as={'a'} className={classNames.link} onClick={onClickHandler} variant={'link'}>
            <Typography className={classNames.link} variant={'link1'}>
              Try logging in
            </Typography>
          </Button>
        </div>
      </div>
    </Card>
  )
}
