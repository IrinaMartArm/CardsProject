import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography/Typography'
import { clsx } from 'clsx'

import s from './password.module.scss'

type PasswordProps = {
  forgot?: boolean
}

const classNames = {
  buttonBox: s.buttonBox,
  container: s.container,
  inputBox: clsx(s.inputBox, s.text),
  light: s.light,
  link: s.link,
  root: s.root,
}

export const Password = ({ forgot }: PasswordProps) => {
  return <form>{forgot ? <ForgotPassword /> : <CreatePassword />}</form>
}

const CreatePassword = () => {
  return (
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
          <Button className={classNames.link} variant={'primary'}>
            Create New Password
          </Button>
        </div>
      </div>
    </div>
  )
}

const ForgotPassword = () => {
  return (
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
          <Button variant={'primary'}>Send Instructions</Button>
          <Typography className={classNames.light} variant={'body2'}>
            Did you remember your password?
          </Typography>
          <Button as={'a'} variant={'link'}>
            Try logging in
          </Button>
        </div>
      </div>
    </div>
  )
}
