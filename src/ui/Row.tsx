import { type ReactNode } from 'react'

type RowProps = {
    children: ReactNode
    type: 'horizontal' | 'vertical'
    gap?: 'small' | 'medium' | 'large'
}

function Row({ children, type, gap = 'medium' }: RowProps) {
    return (
        <div
            className={`flex ${type === 'horizontal' ? 'items-center justify-between' : `flex-col ${gap === 'small' && 'gap-5'} ${gap === 'medium' && 'gap-9'} ${gap === 'large' && 'gap-14'}`}`}
        >
            {children}
        </div>
    )
}

export default Row
