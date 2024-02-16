import { forwardRef, memo } from 'react'

import { IconProps } from '@/utils/Types'

export const StarBorder = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => {
    return (
      <svg
        fill={'none'}
        height={'100%'}
        ref={ref}
        viewBox={'0 0 24 24'}
        width={'100%'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <g clipPath={'url(#prefix__clip0_124_21528)'}>
          <path
            d={
              'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z'
            }
            fill={'var(--color-warning-300)'}
          />
        </g>
        <defs>
          <clipPath id={'prefix__clip0_124_21528'}>
            <path d={'M0 0h24v24H0z'} fill={'#fff'} />
          </clipPath>
        </defs>
      </svg>
    )
  })
)
