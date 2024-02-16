import { useController, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckBox } from '@/components/ui/checkBox'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography/Typography'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './SignInForm.module.scss'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

type FormValues = z.infer<typeof loginSchema>

/*type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}*/
interface Props {
  ClassName?: string
}
export const SignInForm = ({ ClassName }: Props) => {
  const {
    control,
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

  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue: false,
    name: 'rememberMe',
  })

  return (
    <Card as={'form'} className={`${s.form} ${ClassName}`} onSubmit={handleSubmit(onSubmit)}>
      <Typography className={s.headerText} variant={'h1'}>
        Sign In
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
      <CheckBox
        checked={value}
        className={s.checkbox}
        label={'remember me'}
        onCheckedChange={onChange}
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
