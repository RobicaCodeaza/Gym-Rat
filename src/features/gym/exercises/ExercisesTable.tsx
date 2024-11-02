import Menus from '../../../ui/Menus'
import Table from '../../../ui/Table'
import ExerciseRow from './ExerciseRow'

const exercises: Exercise[] = []

function ExercisesTable() {
    return (
        <Menus>
            <Table columns="tableExercises">
                <Table.Header>
                    <div>Name</div>
                    <div>Last Exercised</div>
                    <div>Equipment</div>
                    <div>PR</div>
                    <div></div>
                    <div></div>
                </Table.Header>

                <Table.Body
                    data={exercises}
                    render={(exercise) => (
                        <ExerciseRow key={exercise.id} exercise={exercise} />
                    )}
                />
                <Table.Footer>
                    {/* <Pagination count={count}></Pagination> */}
                </Table.Footer>
            </Table>
        </Menus>
    )
}

export default ExercisesTable
