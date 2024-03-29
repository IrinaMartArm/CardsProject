import { forwardRef, memo } from 'react'

import { IconProps } from '@/utils/Types'

export const KeyboardArrowDown = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => (
    <svg
      fill={'none'}
      height={'24%'}
      ref={ref}
      viewBox={'0 0 24 24'}
      width={'24%'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <g clipPath={'url(#prefix__clip0_124_21507)'}>
        <path d={'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z'} fill={'currentColor'} />
      </g>
      <defs>
        <clipPath id={'prefix__clip0_124_21507'}>
          <path d={'M0 0h24v24H0z'} fill={'#fff'} />
        </clipPath>
      </defs>
    </svg>
  ))
)
