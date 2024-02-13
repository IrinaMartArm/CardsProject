import { FormEvent } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography/Typography'
import { clsx } from 'clsx'

import s from './password.module.scss'

type PasswordProps = {
  forgot?: boolean
  onSubmit: () => void
}

const classNames = {
  buttonBox: s.buttonBox,
  container: s.container,
  inputBox: clsx(s.inputBox, s.text),
  light: s.light,
  link: s.link,
  root: s.root,
}

export const Password = ({ forgot, onSubmit }: PasswordProps) => {
  const onSubmitHandler = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onSubmit()
  }
  const onSubmitHandler2 = (e: FormEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <form>
      {forgot ? (
        <div className={classNames.root}>
          <div className={classNames.container}>
            <Typography variant={'h1'}>Forgot your password?</Typography>
            <div className={classNames.inputBox}>
              <Input fullWidth label={'Email'} type={'text'} />
              <Typography variant={'body2'}>
                Enter your email address and we will send you further instructions{' '}
              </Typography>
            </div>
            <div className={classNames.buttonBox}>
              <Button onSubmit={onSubmitHandler} variant={'primary'}>
                Send Instructions
              </Button>
              <Typography className={classNames.light} variant={'body2'}>
                Did you remember your password?
              </Typography>
              <Button
                as={'a'}
                className={classNames.link}
                onSubmit={onSubmitHandler2}
                variant={'link'}
              >
                <Typography className={classNames.link} variant={'link1'}>
                  Try logging in
                </Typography>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className={classNames.root}>
          <div className={classNames.container}>
            <Typography variant={'h1'}>Create new password</Typography>
            <div className={classNames.inputBox}>
              <Input fullWidth label={'Password'} type={'password'} />
              <Typography variant={'body2'}>
                Create new password and we will send you further instructions to email
              </Typography>
            </div>
            <div className={classNames.buttonBox}>
              <Button onSubmit={onSubmitHandler} variant={'primary'}>
                Create New Password
              </Button>
            </div>
          </div>
        </div>
      )}
    </form>
  )
}
//
// const CreatePassword = () => {
//   return (
//
//   )
// }
//
// const ForgotPassword = () => {
//   return (
//
//   )
// }
