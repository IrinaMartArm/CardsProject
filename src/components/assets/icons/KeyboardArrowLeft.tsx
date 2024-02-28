import { forwardRef, memo } from 'react'

import { IconProps } from '@/utils/Types'

export const KeyboardArrowLeft = memo(
  forwardRef<SVGSVGElement, IconProps>(({ color }, ref) => {
    return (
      <svg
        fill={'#fff'}
        height={'24'}
        ref={ref}
        viewBox={'0 0 24 24'}
        width={'24'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <g clipPath={'url(#prefix__clip0_124_21508)'}>
          <path d={'M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z'} fill={color} />
        </g>
        <defs>
          <clipPath id={'prefix__clip0_124_21508'}>
            <path d={'M0 0h24v24H0z'} fill={'#fff'} />
          </clipPath>
        </defs>
      </svg>
    )
  })
)
