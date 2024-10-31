import { FiPlus, FiDelete } from 'react-icons/fi'
import Modal from '@/ui/Modal'
import Button from '@/ui/Button'
import ConfirmDelete from '@/ui/ConfirmDelete'
import FormWorkoutTrigger from './FormWorkoutTrigger'

function ExercisesModifier() {
    return (
        <Modal>
            <div className="flex flex-col gap-2 phone:flex-row phone:gap-6">
                <FormWorkoutTrigger width="auto">
                    <Button as="div" variation="simplePrimary" size="small">
                        <FiPlus className="h-8 w-8"></FiPlus>
                        New Exercise
                    </Button>
                </FormWorkoutTrigger>

                <Modal.Open opensWindow="deleteAllExercises">
                    <Button as="div" variation="danger" size="small">
                        <FiDelete className="h-8 w-8"></FiDelete>
                        Delete All
                    </Button>
                </Modal.Open>

                <Modal.Window
                    nameOfWindow="deleteAllExercises"
                    titleOfWindow="Delete all Exercises"
                >
                    <ConfirmDelete
                        resourceName="Complete Series of Exercises"
                        // disabled={isDeletingAll}
                        // onConfirm={deleteAllDecks}
                    ></ConfirmDelete>
                </Modal.Window>
            </div>
        </Modal>
    )
}

export default ExercisesModifier
