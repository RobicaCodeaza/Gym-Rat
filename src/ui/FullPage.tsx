import { type ReactNode } from 'react'

type FullPageProps = { children: ReactNode }

function FullPage({ children }: FullPageProps) {
    return (
        <div className="bg-picton-blue-100 flex h-screen w-screen items-center justify-center">
            {children}
        </div>
    )
}

export default FullPage
