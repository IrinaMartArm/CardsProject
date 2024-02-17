import { Button } from '@/components/ui/button'
import { Header } from '@/components/ui/header/Header'
import { Typography } from '@/components/ui/typography/Typography'

import s from './error.module.scss'

import error from '../../components/assets/images/404.png'
export const ErrorPage = () => {
  return (
    <div className={s.root}>
      <Header withBtn />
      <div className={s.content}>
        <img alt={'errorPage ERROR'} className={s.img} src={error} />
        <Typography variant={'body2'}>Sorry! Page not found!</Typography>
        <Button variant={'primary'}>Back to home page</Button>
      </div>
    </div>
  )
}
