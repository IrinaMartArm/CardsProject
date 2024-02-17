import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'

import * as LabelRadixUI from '@radix-ui/react-label'

export type LabelProps = {
  label?: ReactNode
} & ComponentPropsWithoutRef<'label'>

export const Label: FC<LabelProps> = ({ children, className, label, ...rest }) => {
  return <LabelRadixUI.Root {...rest}>{label}</LabelRadixUI.Root>
}
