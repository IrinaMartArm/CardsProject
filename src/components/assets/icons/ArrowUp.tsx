import { forwardRef, memo } from 'react'

import { IconProps } from '@/utils/Types'

export const ArrowUp = memo(
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
        <g clipPath={'url(#prefix__clip0_124_21506)'}>
          <path
            d={'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z'}
            fill={'currentColor'}
          />
        </g>
        <defs>
          <clipPath id={'prefix__clip0_124_21506'}>
            <path d={'M0 0h24v24H0z'} fill={'#fff'} />
          </clipPath>
        </defs>
      </svg>
    )
  })
)
