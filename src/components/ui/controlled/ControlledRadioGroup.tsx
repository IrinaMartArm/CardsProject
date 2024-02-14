import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupType } from '@/components/ui/radio-group/RadioGroup'

type PropsType<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'defaultValue' | 'disabled' | 'rules'
> &
  Omit<RadioGroupType, 'onValueChange'>
export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  shouldUnregister,
  ...rest
}: PropsType<T>) => {
  const { field } = useController({
    control,
    disabled: rest.disabled,
    name: rest.name,
    shouldUnregister,
  })

  return <RadioGroup variants={rest.variants} {...field} />
}
