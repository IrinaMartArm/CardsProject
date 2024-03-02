import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode,
  forwardRef,
  useState,
} from 'react'

import { Typography } from '@/components/ui/typography/Typography'
import { ZodError } from 'zod'

import s from './FileUploader.module.scss'

type Props = {
  setFile: (file: File) => void
  trigger: ReactNode
  // validationSchema?: ZodEffects<any>
} & ComponentPropsWithoutRef<'input'>

export const FileUploader = forwardRef<ElementRef<'input'>, Props>(
  ({ className, name, setFile, trigger, ...rest }, ref) => {
    const [error, setError] = useState<null | string>(null)

    const handleChangeCover = (e: ChangeEvent<HTMLInputElement>) => {
      // if (e.target.files && e.target.files.length) {
      //   console.log(e.target.files)
      //   setFile(e.target.files[0])
      // }

      try {
        const file = e.target.files?.[0]

        if (file) {
          setFile(file)
          setError(null)
        }
      } catch (e) {
        const error = e as Error | ZodError

        if (error instanceof ZodError) {
          setError('Validate error: ' + error.errors[0].message)
        } else {
          setError('Native error: ' + error.message)
        }
      }
    }

    return (
      <>
        <Typography as={'label'} className={className} htmlFor={name} variant={'caption'}>
          {trigger}

          <input
            className={s.input}
            id={name}
            onChange={handleChangeCover}
            ref={ref}
            type={'file'}
            {...rest}
          />
          <Typography as={'span'} className={s.error} variant={'caption'}>
            {error}
          </Typography>
        </Typography>
      </>
    )
  }
)
