import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { ControlledInput } from '@/components/ui/controlled/ControlledInput'
import { Typography } from '@/components/ui/typography/Typography'
import { emailSchema, passwordSchema } from '@/utils/Validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { clsx } from 'clsx'
import { z } from 'zod'

import s from './password.module.scss'

type EmailValues = z.infer<typeof emailSchema>

const classNames = {
  buttonBox: s.buttonBox,
  container: s.container,
  inputBox: clsx(s.inputBox, s.text),
  light: s.light,
  link: s.link,
  root: s.root,
}

export const ForgotPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<EmailValues>({
    defaultValues: { email: '' },
    resolver: zodResolver(passwordSchema),
  })

  const onSubmitHandler = (value: EmailValues) => {
    console.log(value)
  }

  const onClickHandler = () => {}

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <div className={classNames.root}>
        <div className={classNames.container}>
          <Typography variant={'h1'}>Forgot your password?</Typography>
          <div className={classNames.inputBox}>
            <ControlledInput
              control={control}
              errorMessage={errors.email?.message}
              fullWidth
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
              Send Instructions
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
      </div>
    </form>
  )
}
