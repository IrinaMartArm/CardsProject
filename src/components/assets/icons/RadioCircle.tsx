import { forwardRef, memo } from 'react'

import { IconProps } from '@/utils/Types'
export const RadioCircle = memo(
  forwardRef<SVGSVGElement, IconProps>(({}, ref) => {
    return (
      <svg
        fill={'none'}
        height={'16'}
        ref={ref}
        viewBox={'0 0 16 16'}
        width={'16'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <path
          d={
            'M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM8 14.4C4.464 14.4 1.6 11.536 1.6 8C1.6 4.464 4.464 1.6 8 1.6C11.536 1.6 14.4 4.464 14.4 8C14.4 11.536 11.536 14.4 8 14.4Z'
          }
          fill={'#8C61FF'}
        />
      </svg>
    )
  })
)