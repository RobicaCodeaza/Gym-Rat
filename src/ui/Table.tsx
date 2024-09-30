import {
    createContext,
    type PropsWithChildren,
    useContext,
    type ReactElement,
} from 'react'

type TableContextType = {
    columns: number
}

const TableContext = createContext<TableContextType | null>(null)

function Table({ columns, children }: PropsWithChildren<TableContextType>) {
    return (
        <TableContext.Provider value={{ columns }}>
            <div className="border-grey-600 bg-grey-0 overflow-hidden rounded-lg border text-base md:overflow-x-scroll">
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
    return (
        <div
            role="row"
            className={`grid grid-cols-${columns} items-center gap-6 border-b border-cod-gray-600 bg-cod-gray-950 p-4 font-semibold uppercase tracking-wide text-cod-gray-200`}
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

    return (
        <div
            role="row"
            className={`grid grid-cols-${columns} border-grey-100 items-center gap-6 border-b p-3 last:border-b-0 md:flex md:flex-col md:gap-3 md:text-center`}
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
        <footer className="bg-grey-50 flex justify-center p-3">
            {children}
        </footer>
    )
}

Table.Header = Header
Table.Body = Body
Table.Row = Row
Table.Footer = Footer
export default Table
