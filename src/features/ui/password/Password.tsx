import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography/Typography'

type PasswordProps = {
  forgot?: boolean
}

export const Password = ({ forgot }: PasswordProps) => {
  return (
    <div>
      {forgot ? (
        <div>
          <Typography variant={'h2'}>Forgot your password?</Typography>
          <Input label={'Email'} type={'text'} />
          <Typography variant={'body2'}>
            Enter your email address and we will send you further instructions{' '}
          </Typography>
          <Button variant={'primary'}>Send Instructions</Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
