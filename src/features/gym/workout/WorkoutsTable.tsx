import Menus from '../../../ui/Menus'
import Table from '../../../ui/Table'
import WorkoutRow, { Workout } from './WorkoutRow'

const workouts: Workout[] = [
    {
        id: 1,
        lastTimeWorked: '11/07/2024',
        totalTime: '90',
        type: 'chest',
        name: 'Chest Workout',
    },

    {
        id: 2,
        lastTimeWorked: '11/07/2024',
        totalTime: '90',
        type: 'chest',
        name: 'Chest Workout',
    },
    {
        id: 3,
        lastTimeWorked: '11/07/2024',
        totalTime: '90',
        type: 'chest',
        name: 'Chest Workout',
    },
    {
        id: 4,
        lastTimeWorked: '11/07/2024',
        totalTime: '90',
        type: 'chest',
        name: 'Chest Workout',
    },
    {
        id: 5,

        lastTimeWorked: '11/07/2024',
        totalTime: '90',
        type: 'chest',
        name: 'Chest Workout',
    },
    {
        id: 6,
        lastTimeWorked: '11/07/2024',
        totalTime: '90',
        type: 'chest',
        name: 'Chest Workout',
    },
]

function WorkoutsTable() {
    return (
        <Menus>
            <Table columns="tableWorkouts">
                <Table.Header>
                    <div>Name</div>
                    <div>Last Worked Out</div>
                    <div>Exercises</div>
                    <div>Type</div>
                    <div>Next Training</div>
                    <div></div>
                </Table.Header>

                <Table.Body
                    data={workouts}
                    render={(workout) => (
                        <WorkoutRow key={workout.id} workout={workout} />
                    )}
                />
                <Table.Footer>
                    {/* <Pagination count={count}></Pagination> */}
                </Table.Footer>
            </Table>
        </Menus>
    )
}

export default WorkoutsTable
