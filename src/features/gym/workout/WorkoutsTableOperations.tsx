import Filter from '../../../ui/Filter'
import SortBy from '../../../ui/SortBy'
import TableOperations from '../../../ui/TableOperations'

function WorkoutsTableOperations() {
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
