import WorkoutsModifier from '../features/gym/workout/WorkoutsModifier'
import WorkoutsTableOperations from '../features/gym/workout/WorkoutsTableOperations'
import Row from '../ui/Row'

function Workout() {
    return (
        <Row type="horizontal">
            <WorkoutsModifier></WorkoutsModifier>
            <WorkoutsTableOperations></WorkoutsTableOperations>
        </Row>
    )
}

export default Workout
