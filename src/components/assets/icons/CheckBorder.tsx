import { forwardRef, memo } from 'react'

import { IconProps } from '@/utils/Types'

export const CheckBorder = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => (
    <svg
      fill={'none'}
      height={'100%'}
      ref={ref}
      viewBox={'0 0 24 24'}
      width={'100%'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <path
        d={
          'M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z'
        }
        fill={'currentColor'}
      />
    </svg>
  ))
)
