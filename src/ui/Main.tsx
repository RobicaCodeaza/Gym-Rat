import { PropsWithChildren } from 'react'

function Main({ children }: PropsWithChildren) {
    return (
        <main className="bg-picton-blue-90 overflow-y-scroll bg-cod-gray-300 px-8 py-12 phone:px-16 phone:py-10 tab-port:px-24 tab-port:py-16 tab-land:px-32 tab-land:py-24 particular-small-laptop:px-40 particular-small-laptop:py-32">
            {children}
        </main>
    )
}

export default Main
