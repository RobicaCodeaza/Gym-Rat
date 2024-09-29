import { useSearchParams } from 'react-router-dom'
import Filter from '../../../ui/Filter'
import Select from '../../../ui/Select'
import SortBy from '../../../ui/SortBy'
import TableOperations from '../../../ui/TableOperations'

function WorkoutsTableOperations() {
    const [searchParams, setSearchParams] = useSearchParams()
    function handleChange(
        e: React.ChangeEvent<HTMLSelectElement>,
        field: string
    ) {
        searchParams.set(field, e.target.value)
        if (searchParams.get('page')) searchParams.set('page', '1')
        setSearchParams(searchParams)
    }

    return (
        <TableOperations>
            <Filter
                filteredField="workedOut"
                options={[
                    { value: 'all', label: 'All' },
                    { value: 'workedOut', label: 'Worked Out' },
                    { value: 'notWorkedOut', label: 'Not Worked Out' },
                ]}
            ></Filter>
            <Select
                onChange={(e) => handleChange(e, 'workoutType')}
                options={[
                    { value: 'push', label: 'Push' },
                    { value: 'pull', label: 'Pull' },
                ]}
                currentValue=""
            ></Select>
            <SortBy
                options={[
                    {
                        value: 'lastTested-asc',
                        label: 'Sort by date(latest first)',
                    },
                    {
                        value: 'lastTested-desc',
                        label: 'Sort by date(oldest first)',
                    },
                ]}
            ></SortBy>
        </TableOperations>
    )
}

export default WorkoutsTableOperations
