import { useForm } from 'react-hook-form'

import { ControlledCheckBox } from '@/components/ui/controlled/ControlledCheckBox'
import { ControlledTextField } from '@/components/ui/controlled/ControlledTextField'
import { loginSchema, passwordSchema } from '@/utils/Validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '@/components/ui/modals/modals.module.scss'

type FormValues = z.infer<typeof passwordSchema> // ????
export const FieldsBlock = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  console.log(control)
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <form className={s.textFieldsBox} onSubmit={handleSubmit(onSubmit)}>
      <fieldset className={s.Fieldset}>
        <ControlledTextField
          control={control}
          errorMessage={errors.password?.message}
          name={'password'}
          type={'text'}
        />
      </fieldset>
      <fieldset className={s.Fieldset}>
        <ControlledTextField
          control={control}
          errorMessage={errors.password?.message}
          name={'password'}
          type={'text'}
        />
      </fieldset>
      <fieldset className={s.Fieldset}>
        <ControlledTextField
          control={control}
          errorMessage={errors.password?.message}
          name={'password'}
          type={'text'}
        />
      </fieldset>
      <fieldset className={s.Fieldset}>
        <ControlledCheckBox control={control} label={'Check-box'} name={'password'} />
      </fieldset>
    </form>
  )
}
