import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (
  { height, width, ...rest }: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    height={height}
    version={'1.0'}
    viewBox={'0 0 128 128'}
    width={width}
    xmlSpace={'preserve'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...rest}
    ref={ref}
  >
    <g>
      <circle cx={'16'} cy={'64'} fill={'#8c61ff'} r={'16'} />
      <circle cx={'16'} cy={'64'} fill={'#b296ff'} r={'16'} transform={'rotate(45,64,64)'} />
      <circle cx={'16'} cy={'64'} fill={'#cfbdff'} r={'16'} transform={'rotate(90,64,64)'} />
      <circle cx={'16'} cy={'64'} fill={'#e8dfff'} r={'16'} transform={'rotate(135,64,64)'} />
      <animateTransform
        attributeName={'transform'}
        calcMode={'discrete'}
        dur={'1040ms'}
        repeatCount={'indefinite'}
        type={'rotate'}
        values={'0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64'}
      ></animateTransform>
    </g>
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
