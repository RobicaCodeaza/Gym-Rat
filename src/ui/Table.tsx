import {
    createContext,
    type PropsWithChildren,
    useContext,
    type ReactElement,
} from 'react'

type TableContextType = {
    columns: string
}

const TableContext = createContext<TableContextType | null>(null)

function Table({ columns, children }: PropsWithChildren<TableContextType>) {
    return (
        <TableContext.Provider value={{ columns }}>
            <div className="overflow-hidden overflow-x-scroll rounded-lg border border-cod-gray-700 bg-cod-gray-950 text-base">
                {children}
            </div>
        </TableContext.Provider>
    )
}

type HeaderProps = PropsWithChildren

function Header({ children }: HeaderProps) {
    const context = useContext(TableContext)

    if (context === null || context === undefined)
        throw new Error('Your component does not have access to Table context')

    const { columns } = context
    const gridTemplateColumns =
        columns === 'tableWorkouts' ? `tab-port:grid-cols-tableWorkouts` : ''
    return (
        <div
            // role="row"
            className={`hidden tab-port:grid ${gridTemplateColumns} items-center gap-3 border-b border-cod-gray-800 bg-dodger-blue-950 p-3 font-semibold uppercase tracking-wide text-cod-gray-200 backdrop-blur-sm tab-land:gap-6 tab-land:px-6 tab-land:py-3 tab-land:text-center`}
        >
            {children}
        </div>
    )
}

function Row({ children }: PropsWithChildren) {
    const context = useContext(TableContext)

    if (context === null || context === undefined)
        throw new Error('Your component does not have access to Table context')

    const { columns } = context
    const gridTemplateColumns =
        columns === 'tableWorkouts' ? `tab-port:grid-cols-tableWorkouts` : ''
    return (
        <div
            // role="row"
            className={`border-starship-950 ${gridTemplateColumns} flex flex-col items-center gap-6 border-b bg-cod-gray-950 p-6 last:border-b-0 tab-port:grid tab-land:gap-6 tab-land:text-center`}
        >
            {children}
        </div>
    )
}

type BodyProps<T> = {
    data: T[]
    render: (item: T, index: number) => ReactElement
}

function Body<T>({ data, render }: BodyProps<T>) {
    if (!data.length)
        return (
            <p className="m-6 text-center text-lg font-medium">
                No data to show at the moment!
            </p>
        )
    return <section className="my-1">{data.map(render)}</section>
}

function Footer({ children }: PropsWithChildren) {
    return (
        <footer className="flex justify-center bg-cod-gray-darker/80 p-3 backdrop-blur-sm">
            {children}
        </footer>
    )
}

Table.Header = Header
Table.Body = Body
Table.Row = Row
Table.Footer = Footer
export default Table
