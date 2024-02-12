import { AuthPhoto } from '@/components/ui/authPhoto/AuthPhoto'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/tipography/Typography'

import s from './header.module.scss'

import photo from '../../../images/photo 1.png'

type HeaderProps = {
  name?: string
  photo?: string
  withBtn?: boolean
}
export const Header = ({ name, withBtn }: HeaderProps) => {
  return (
    <div className={s.header}>
      <div>
        <img alt={'IT-Incubator'} src={''} />
      </div>
      {withBtn ? (
        <div>
          <Button variant={'secondary'}>Sign In</Button>
        </div>
      ) : (
        <div className={s.auth}>
          <Typography className={s.name} variant={'subtitle1'}>
            {name}
          </Typography>
          <AuthPhoto photo={photo} />
        </div>
      )}
    </div>
  )
}
