import { forwardRef, memo } from 'react'

import { IconProps } from '@/utils/Types'

export const KeyboardArrowRight = memo(
  forwardRef<SVGSVGElement, IconProps>(({ color }, ref) => {
    return (
      <svg
        fill={'none'}
        height={'24'}
        ref={ref}
        viewBox={'0 0 24 24'}
        width={'24'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <g clipPath={'url(#prefix__clip0_124_21509)'}>
          <path d={'M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z'} fill={color} />
        </g>
        <defs>
          <clipPath id={'prefix__clip0_124_21509'}>
            <path d={'M0 0h24v24H0z'} fill={'#fff'} />
          </clipPath>
        </defs>
      </svg>
    )
  })
)
