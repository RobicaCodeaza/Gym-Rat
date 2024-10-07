import Button from '@/ui/Button'
import FormRow from '@/ui/FormRow'
import { Input } from '@/components/aceternity/Input'
import { Label } from '@/components/aceternity/Label'
import { LabelInputContainer } from '@/ui/FormRow'
import {
    type SubmitErrorHandler,
    type SubmitHandler,
    useForm,
    type FieldError,
} from 'react-hook-form'
import toast from 'react-hot-toast'
import { useCreateWorkout } from './useCreateWorkout'
import { useEditWorkout } from './useEditWorkout'
import { Tables } from '@/types/database.types'
import Spinner from '@/ui/Spinner'
import Select from '../../../ui/Select'

type CreateWorkoutFormProps = {
    workoutToEdit?: Tables<'Workout'>
}

function CreateWorkoutForm({ workoutToEdit }: CreateWorkoutFormProps) {
    //Verifying if it is editing session or creating session
    const { id: editId, ...editValues } = workoutToEdit ?? {}
    const isEditingSession = Boolean(editId)

    let editValuesDefined

    const { isCreating, createWorkout } = useCreateWorkout()
    const { isUpdating, updateWorkout } = useEditWorkout()
    const isWorking = isCreating ?? isUpdating

    const { register, handleSubmit, formState, reset } = useForm<
        Tables<'Workout'>
    >({
        defaultValues: isEditingSession ? editValuesDefined : undefined,
    })
    const { errors } = formState

    const onSubmit: SubmitHandler<Tables<'Workout'>> = (data) => {
        if (isEditingSession) {
            updateWorkout(
                { data, id: editId! },
                {
                    onSuccess: () => {
                        reset()
                    },
                }
            )
        } else {
            createWorkout(data, {
                onSuccess: () => {
                    reset()
                },
            })
        }
    }
    const onError: SubmitErrorHandler<FieldError> = () => {
        toast.error(`Error in completing fields.`)
    }

    if (isWorking) return <Spinner></Spinner>

    return (
        <form
            className="flex flex-col items-center gap-1"
            onSubmit={handleSubmit(onSubmit, onError)}
        >
                {Array.from({ length: 1 }, (_, index) => {
                    return (
                        <Select
                            key={index}
                            id="exercises"
                            defaultValue={}

                            {...register(, {
                                required: 'Missing Exercise',
                            })}
                        />
                    )
                })}

            {/* <DrawerFooter> */}
            <FormRow label="Question" error={errors?.question?.message}>
                <Input
                    type="text"
                    id="question"
                    disabled={isWorking}
                    placeholder="ex: What types of muscles...?"
                    {...register('question', {
                        required: 'This field is required',
                    })}
                />
            </FormRow>

            {Array.from({ length: numAnswers }, (_, index) => (
                <FormRow
                    label={`${numAnswers > 1 ? `${index + 1} - ` : ''}  Answer `}
                    error={errors?.answers?.[index]?.message}
                    key={index}
                >
                    <Input
                        type="text"
                        id="answer"
                        disabled={isWorking}
                        defaultValue={
                            isEditingSession ? cardToEdit?.answers?.[index] : ''
                        }
                        {...register(`answers.${index}`, {
                            required: 'This field is required',
                        })}
                    ></Input>
                </FormRow>
            ))}

            <div className="flex justify-between gap-6">
                <Button
                    type="reset"
                    variation="subtleWhite"
                    size="small"
                    disabled={isWorking}
                >
                    Cancel
                </Button>
                <Button
                    variation="simplePrimary"
                    size="small"
                    disabled={isWorking}
                >
                    Submit
                </Button>
            </div>
        </form>
    )
}

export default CreateWorkoutForm
