import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ControlledTextField } from '@/components/ui/controlled/ControlledTextField'
import { Typography } from '@/components/ui/typography/Typography'
import { emailSchema } from '@/utils/Validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './ForgotPassword.module.scss'

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
      <Typography className={s.title} variant={'h1'}>
        Forgot your password?
      </Typography>
      <ControlledTextField
        control={control}
        errorMessage={errors.email?.message}
        label={'Email'}
        name={'email'}
        type={'text'}
      />
      <Typography className={s.subtitle} variant={'body2'}>
        Enter your email address and we will send you further instructions
      </Typography>
      <Button fullWidth type={'submit'} variant={'primary'}>
        <Typography variant={'body2'}>Send Instructions</Typography>
      </Button>
      <Typography className={s.subtitle2} variant={'body2'}>
        Did you remember your password?
      </Typography>
      <Button as={'a'} className={classNames.link} onClick={onClickHandler} variant={'link'}>
        <Typography className={classNames.link} variant={'link1'}>
          Try logging in
        </Typography>
      </Button>
    </Card>
  )
}
