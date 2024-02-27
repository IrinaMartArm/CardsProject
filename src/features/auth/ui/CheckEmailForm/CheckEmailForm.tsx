import { Link } from 'react-router-dom'

import checkEmail from '@/components/assets/images/checkEmail.svg'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography/Typography'

import s from './CheckEmailForm.module.scss'

interface Props {
  className?: string
  email: string
}
export const CheckEmailForm = ({ className, email }: Props) => {
  return (
    <Card as={'div'} className={`${s.form} ${className}`}>
      <Typography className={s.headerText} variant={'h1'}>
        Check Email
      </Typography>
      <Avatar className={s.image} size={'large'} src={checkEmail} title={''} />
      <Typography className={s.descriptionText} variant={'body2'}>
        We’ve sent an Email with instructions to {email}
      </Typography>
      <Button as={Link} className={s.signInNav} fullWidth to={'/login'} variant={'primary'}>
        Back to Sign In
      </Button>
    </Card>
  )
}
