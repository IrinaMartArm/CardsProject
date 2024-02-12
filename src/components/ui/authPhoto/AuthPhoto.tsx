// import s from '@/components/ui/dropDownMenu/dropDown.module.scss'

import s from './authPhoto.module.scss'

type AuthPhotoProps = {
  photo: string
}
export const AuthPhoto = ({ photo }: AuthPhotoProps) => {
  return (
    <div className={s.photoWrapper}>
      <img alt={'photo'} className={s.photo} src={photo} />
    </div>
  )
}
