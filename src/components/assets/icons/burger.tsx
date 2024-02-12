import { Ref, SVGProps, forwardRef, memo } from 'react'

const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    height={'18px'}
    viewBox={'0 0 100 100'}
    width={'18px'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
    ref={ref}
  >
    <circle cx={'50'} cy={'50'} fill={'white'} r={'50'} />
    <circle cx={'50'} cy={'50'} fill={'black'} r={'46'} />
    <circle cx={'50'} cy={'30'} fill={'white'} r={'5'} />
    <circle cx={'50'} cy={'50'} fill={'white'} r={'5'} />
    <circle cx={'50'} cy={'70'} fill={'white'} r={'5'} />
  </svg>
)

const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
