import { useController, useForm } from 'react-hook-form'

import { CheckBox } from '@/components/ui/checkBox'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../ui/button'

type FormValues = z.infer<typeof loginSchema>

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3).max(20),
  rememberMe: z.boolean(),
})

export const LoginForm = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type={'text'}
        {...register('email')}
        errorMessage={errors.email?.message}
        label={'email'}
      />
      <Input
        type={'password'}
        {...register('password')}
        errorMessage={errors.password?.message}
        label={'password'}
      />
      <CheckBox checked={value} label={'Remember me'} onValueChange={onChange} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
