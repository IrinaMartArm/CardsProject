import { useForm } from 'react-hook-form'

import { ControlledCheckBox } from '@/components/ui/controlled/ControlledCceckBox'
import { ControlledInput } from '@/components/ui/controlled/ControlledInput'
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        type={'text'}
        {...register('email')}
        errorMessage={errors.email?.message}
        label={'email'}
        onChange={() => {}}
      />
      <ControlledInput
        control={control}
        errorMessage={errors.password?.message}
        label={'password'}
        name={'password'}
        type={'password'}
      />
      <ControlledCheckBox control={control} label={'Remember me'} name={'rememberMe'} />
      <Button type={'submit'}>Submit</Button>
    </form>
  )
}
