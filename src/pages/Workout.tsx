import WorkoutsModifier from '../features/gym/workout/WorkoutsModifier'
import WorkoutsTable from '../features/gym/workout/WorkoutsTable'
import WorkoutsTableOperations from '../features/gym/workout/WorkoutsTableOperations'
import Row from '../ui/Row'

function Workout() {
    return (
        <Row type="vertical">
            <Row type="horizontal">
                <WorkoutsModifier></WorkoutsModifier>
                <WorkoutsTableOperations></WorkoutsTableOperations>
            </Row>
            <WorkoutsTable></WorkoutsTable>
        </Row>
    )
}

export default Workout
