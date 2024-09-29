import { FiPlus, FiDelete } from 'react-icons/fi'
import Modal from '@/ui/Modal'
import Button from '@/ui/Button'
import ConfirmDelete from '@/ui/ConfirmDelete'

function DecksModifiers() {
    return (
        <Modal>
            <div className="flex flex-col gap-2 phone:flex-row phone:gap-6">
                <Modal.Open opensWindow="addWorkout">
                    <Button as="div" variation="simplePrimary" size="tiny">
                        <FiPlus className="h-8 w-8"></FiPlus>
                        New Workout
                    </Button>
                </Modal.Open>

                <Modal.Window
                    titleOfWindow="Create a Workout"
                    nameOfWindow="addWorkout"
                >
                    {/* <CreateDeckForm deckToEdit={undefined}></CreateDeckForm> */}
                </Modal.Window>

                <Modal.Open opensWindow="deleteAllWorkouts">
                    <Button as="div" variation="danger" size="tiny">
                        <FiDelete className="h-8 w-8"></FiDelete>
                        Delete All
                    </Button>
                </Modal.Open>

                <Modal.Window
                    nameOfWindow="deleteAllWorkouts"
                    titleOfWindow="Delete all Workouts"
                >
                    <ConfirmDelete
                        resourceName="Complete Series of Workouts"
                        // disabled={isDeletingAll}
                        // onConfirm={deleteAllDecks}
                    ></ConfirmDelete>
                </Modal.Window>
            </div>
        </Modal>
    )
}

export default DecksModifiers
