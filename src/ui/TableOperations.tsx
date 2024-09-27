import { type PropsWithChildren } from 'react'

function TableOperations({ children }: PropsWithChildren) {
    return (
        <div className="flex flex-col items-center gap-2 tab-land:flex-row tab-land:gap-6">
            {children}
        </div>
    )
}

export default TableOperations
