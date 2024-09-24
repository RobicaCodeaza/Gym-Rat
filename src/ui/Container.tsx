import { PropsWithChildren } from 'react'

function Container({ children }: PropsWithChildren) {
    return (
        <div className="mx-auto my-0 flex h-full w-full max-w-screen-2xl flex-col gap-12">
            {children}
        </div>
    )
}

export default Container
