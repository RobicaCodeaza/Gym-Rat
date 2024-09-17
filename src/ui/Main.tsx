import { PropsWithChildren } from 'react'

function Main({ children }: PropsWithChildren) {
    return (
        <main className="bg-picton-blue-90 phone:px-12 phone:py-8 tab-port:px-14 tab-port:py-10 tab-land:px-16 tab-land:py-12 particular-small-laptop:px-24 particular-small-laptop:py-20 overflow-y-scroll px-6 py-12">
            {children}
        </main>
    )
}

export default Main
