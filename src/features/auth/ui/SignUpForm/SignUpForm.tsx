import { useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignUpForm.module.scss'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

interface Props {
  className?: string
}
export const SignUpForm = ({ className }: Props) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  console.log('errors: ', errors)
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Card as={'form'} className={`${s.form} ${className}`} onSubmit={handleSubmit(onSubmit)}>
      <Typography className={s.headerText} variant={'h1'}>
        Sign Up
      </Typography>
      <Input
        className={s.input}
        {...register('email')}
        errorMessage={errors.email?.message}
        label={'Email'}
        type={'text'}
      />
      <Input
        className={s.input}
        {...register('password')}
        errorMessage={errors.password?.message}
        label={'Password'}
        type={'password'}
      />
      <Input
        className={s.input}
        {...register('password')}
        errorMessage={errors.password?.message}
        label={'Confirm Password'}
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
