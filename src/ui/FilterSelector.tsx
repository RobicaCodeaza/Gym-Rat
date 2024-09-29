import { useSearchParams } from 'react-router-dom'
import Select from './Select'
import { OptionsType } from './SortBy'

type FilterSelectorProps = {
    currentValue?: string
    options: OptionsType
    filteredField: string
}

function FilterSelector({ options, filteredField }: FilterSelectorProps) {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentValue = searchParams.get(filteredField) ?? options[0].value

    function handleChange(
        e: React.ChangeEvent<HTMLSelectElement>,
        field: string
    ) {
        searchParams.set(field, e.target.value)
        if (searchParams.get('page')) searchParams.set('page', '1')
        setSearchParams(searchParams)
    }

    return (
        <Select
            onChange={(e) => handleChange(e, filteredField)}
            currentValue={currentValue}
            options={options}
        ></Select>
    )
}

export default FilterSelector
