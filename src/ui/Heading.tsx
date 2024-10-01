import {
    type ComponentPropsWithoutRef,
    type ElementType,
    type ReactNode,
} from 'react'

type HeadingProps<T extends ElementType> = {
    as: T
    children: ReactNode
    danger?: 'yes' | 'no'
} & ComponentPropsWithoutRef<T>

function Heading<T extends ElementType>({
    as,
    danger = 'no',
    children,
    ...otherProps
}: HeadingProps<T>) {
    let className = ''

    if (as === 'h1') className = 'text-[2.5rem] font-semibold leading-5 '
    if (as === 'h2') className = 'text-[2rem] font-semibold '
    if (as === 'h3') className = 'text-[2rem] font-medium'
    if (as === 'h4')
        className = 'text-[1.7rem] font-medium tracking-wide text-center'
    if (danger === 'yes') className += ' text-danger-500'

    const Component: ElementType = as

    return (
        <Component className={className} {...otherProps}>
            {children}
        </Component>
    )
}

export default Heading
