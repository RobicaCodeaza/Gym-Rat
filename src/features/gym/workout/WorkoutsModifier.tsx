import { FiPlus, FiDelete } from 'react-icons/fi'
import Modal from '@/ui/Modal'
import Button from '@/ui/Button'
import ConfirmDelete from '@/ui/ConfirmDelete'
import FormWorkoutTrigger from './FormWorkoutTrigger'

function DecksModifiers() {
    return (
        <Modal>
            <div className="flex flex-col gap-2 phone:flex-row phone:gap-6">
                <FormWorkoutTrigger width="auto">
                    <Button as="div" variation="simplePrimary" size="small">
                        <FiPlus className="h-8 w-8"></FiPlus>
                        New Workout
                    </Button>
                </FormWorkoutTrigger>

                <Modal.Open opensWindow="deleteAllWorkouts">
                    <Button as="div" variation="danger" size="small">
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
