import { PropsWithChildren } from 'react'

function Main({ children }: PropsWithChildren) {
    return (
        <main className="z-10 flex flex-1 overflow-y-scroll px-8 py-10 phone:px-16 phone:py-10 tab-port:px-24 tab-port:py-12 tab-land:px-32 particular-small-laptop:px-64">
            {children}
        </main>
    )
}

export default Main
