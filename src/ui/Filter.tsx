import { useSearchParams } from 'react-router-dom'

type FilterProps = {
    filteredField: string
    options: { label: string; value: string }[]
}

function Filter({ filteredField, options }: FilterProps) {
    const [searchParams, setSearchParams] = useSearchParams()
    const currentValue = searchParams.get(filteredField) ?? options[0].value

    function handleChange(value: string) {
        searchParams.set(filteredField, value)
        if (searchParams.get('page') === '1') {
            searchParams.set('page', '1')
        }
        setSearchParams(searchParams)
    }

    return (
        <div
            className={`flex gap-2 rounded border border-cod-gray-900 bg-cod-gray-darker p-2 shadow-sm shadow-cod-gray-100/15`}
        >
            {options.map((option) => (
                <button
                    key={option.label}
                    onClick={() => handleChange(option.value)}
                    disabled={currentValue === option.value}
                    className={`rounded border border-cod-gray-100 bg-cod-gray-950 px-2 py-3 text-[1.4rem] font-medium transition-all duration-300 hover:bg-dodger-blue-600 hover:text-dodger-blue-100 disabled:bg-dodger-blue-700 ${currentValue === option.value ? 'bg-dodger-blue-700 text-dodger-blue-200' : ''}`}
                >
                    {option.label}
                </button>
            ))}
        </div>
    )
}

export default Filter