import { ComponentPropsWithoutRef, forwardRef, useState } from 'react'
import { OptionsType } from './SortBy'

type SelectProps = {
    options: OptionsType
    currentValue: string
    handleChangeCustom?: (e: React.ChangeEvent<HTMLSelectElement>) => void
} & ComponentPropsWithoutRef<'select'>

const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
    { options, currentValue, handleChangeCustom, ...otherProps },
    ref
) {
    const [currentSelectValue, setCurrentSelectValue] = useState(currentValue)
    function handleChangeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
        if (handleChangeCustom) {
            handleChangeCustom(event)
            return
        }

        setCurrentSelectValue(event.target.value)
    }

    return (
        <select
            className="shadow-cod-gray/15 block w-[18.5rem] rounded-lg border border-cod-gray-900 bg-cod-gray-950 px-4 py-2 text-[1.4rem] font-medium shadow-sm phone:px-4 phone:py-2 tab-land:w-auto"
            ref={ref}
            value={currentSelectValue}
            {...otherProps}
            onChange={handleChangeSelect}
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
