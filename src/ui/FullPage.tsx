import { type ReactNode } from 'react'

type FullPageProps = { children: ReactNode }

function FullPage({ children }: FullPageProps) {
    return (
        <div className="flex h-screen w-screen items-center justify-center bg-cod-gray-950">
            {children}
        </div>
    )
}

export default FullPage
