import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { OptionsType } from './SortBy'

type SelectProps = {
    options: OptionsType
    currentSortBy: string
} & ComponentPropsWithoutRef<'select'>

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
    { options, currentSortBy, ...otherProps },
    ref
) {
    return (
        <select
            className="shadow-cod-gray/15 w-[18.5rem] rounded-lg border border-cod-gray-900 bg-cod-gray-950 px-2 py-4 text-[1.4rem] font-medium shadow-sm phone:px-3 phone:py-5 tab-land:w-auto"
            ref={ref}
            value={currentSortBy}
            {...otherProps}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )
})

export default Select
