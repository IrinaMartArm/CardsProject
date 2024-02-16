import Loader from '@/components/assets/icons/Loader'

import s from './fileUploader.module.scss'

export default {}
interface Props {
  fullHeight?: boolean
  size: number | string
}

export const Preloader = ({ fullHeight = false, size }: Props) => {
  return (
    <div className={`${s.preloader} ${fullHeight ? s.fullHeight : ''}`}>
      <Loader height={size} width={size} />
    </div>
  )
}
