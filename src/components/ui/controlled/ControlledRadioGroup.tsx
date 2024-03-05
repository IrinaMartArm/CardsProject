import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components/ui/radio-group/RadioGroup'

type PropsType<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<RadioGroupProps, 'id' | 'onChange' | 'value'>

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  shouldUnregister,
  ...rest
}: PropsType<T>) => {
  const {
    field: { onChange, ref, ...field },
  } = useController({
    control,
    name: rest.name,
    shouldUnregister,
  })

  return (
    <RadioGroup
      {...rest}
      {...field}
      onValueChange={value => onChange(+value)}
      options={rest.options}
      ref={ref}
    />
  )
}
