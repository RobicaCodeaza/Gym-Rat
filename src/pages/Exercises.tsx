import Row from '../ui/Row'
import ExercisesModifier from '../features/gym/exercises/ExercisesModifier'
import ExercisesTableOperations from '../features/gym/exercises/ExercisesTableOperations'
import ExercisesTable from '../features/gym/exercises/ExercisesTable'
function Exercises() {
    return (
        <Row type="vertical">
            <Row type="horizontal">
                <ExercisesModifier></ExercisesModifier>
                <ExercisesTableOperations></ExercisesTableOperations>
            </Row>
            <ExercisesTable></ExercisesTable>
        </Row>
    )
}

export default Exercises
