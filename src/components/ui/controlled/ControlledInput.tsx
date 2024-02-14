import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/components/ui/input'

type PropsType<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<InputProps, 'onValueChange' | 'value'>
export const ControlledInput = <T extends FieldValues>({
  control,
  label,
  shouldUnregister,
  ...rest
}: PropsType<T>) => {
  const { field } = useController({
    control,
    disabled: rest.disabled,
    name: rest.name,
    shouldUnregister,
  })

  return <Input {...rest} {...field} label={label} />
}
