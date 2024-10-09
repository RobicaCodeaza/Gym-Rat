import { useState } from 'react'
import { useCreateWorkout } from './useCreateWorkout'
import { useEditWorkout } from './useEditWorkout'

import { Tables } from '@/types/database.types'

import {
    type SubmitErrorHandler,
    type SubmitHandler,
    useForm,
    type FieldError,
} from 'react-hook-form'

import toast from 'react-hot-toast'

import Button from '@/ui/Button'
import FormRow from '@/ui/FormRow'
import { Input } from '@/components/aceternity/Input'

import Spinner from '@/ui/Spinner'
import Select from '../../../ui/Select'

type CreateWorkoutFormProps = {
    workoutToEdit?: Tables<'Workout'>
}

type FieldValuesCreateWorkoutForm = {
    name: string
    type: string
    workoutType: string
    exerciseId: string[]
    equipmentId: string[]
    restTime: number[]
    sets: number[]
}

function CreateWorkoutForm({ workoutToEdit }: CreateWorkoutFormProps) {
    const [numExercisesToBeAdded, setNumExercisesToBeAdded] = useState(0)

    //Verifying if it is editing session or creating session
    const { id: editId, ...editValues } = workoutToEdit ?? {}
    const isEditingSession = Boolean(editId)

    let editValuesDefined

    const { isCreating, createWorkout } = useCreateWorkout()
    const { isUpdating, updateWorkout } = useEditWorkout()
    const isWorking = isCreating ?? isUpdating

    const { register, handleSubmit, formState, reset } =
        useForm<FieldValuesCreateWorkoutForm>({
            defaultValues: isEditingSession ? editValuesDefined : undefined,
        })
    const { errors } = formState

    const onSubmit: SubmitHandler<FieldValuesCreateWorkoutForm> = (data) => {
        if (isEditingSession) {
            const newData = {}
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

    const exercisesIdOptions = [
        { label: 'Chest Press', value: '1' },
        { label: 'Bench Press', value: '2' },
        { label: 'Squat', value: '3' },
        { label: 'Deadlift', value: '4' },
    ]
    const equipmentIdOptions = [
        { label: 'Barbell', value: '1' },
        { label: 'Dumbbell', value: '2' },
        { label: 'Machine', value: '3' },
    ]

    return (
        <form
            className={`border-mako-grey-100 flex w-[37.5rem] flex-col gap-4 overflow-hidden rounded-md border px-8 py-4 text-[1.4rem] phone:w-full phone:gap-10 phone:px-6 phone:py-4 tab-port:gap-12 tab-port:px-10 tab-port:py-6 tab-land:gap-14`}
            onSubmit={handleSubmit(onSubmit, onError)}
        >
            <FormRow label="Name" error={errors?.name?.message}>
                <Input
                    type="text"
                    id="name"
                    disabled={isWorking}
                    placeholder="ex: Strength Workout"
                    {...register('name', {
                        required: 'This field is required',
                    })}
                />
            </FormRow>
            <FormRow label="Workout Type" error={errors?.workoutType?.message}>
                <Input
                    type="text"
                    id="workoutType"
                    disabled={isWorking}
                    placeholder="ex: Push"
                    {...register('workoutType', {
                        required: 'This field is required',
                    })}
                />
            </FormRow>
            <div>
                <Button as={'button'} variation="simpleTertiary" size="small">
                    Add Exercise
                </Button>
            </div>

            {Array.from({ length: numExercisesToBeAdded }, (_, index) => {
                return (
                    <FormRow
                        label="Exercise"
                        error={errors.exerciseId?.[index]?.message}
                        key={index}
                    >
                        <Select
                            key={index}
                            id="exercises"
                            currentValue={'1'}
                            options={exercisesIdOptions}
                            {...register(`exerciseId.${index}`, {
                                required: 'Missing Exercise',
                            })}
                        />
                    </FormRow>
                )
            })}
            {Array.from({ length: numExercisesToBeAdded }, (_, index) => {
                return (
                    <FormRow
                        label="Equipment"
                        error={errors.equipmentId?.[index]?.message}
                        key={index}
                    >
                        <Select
                            key={index}
                            id="equipment"
                            currentValue={'1'}
                            options={equipmentIdOptions}
                            {...register(`equipmentId.${index}`, {
                                required: 'Missing Equipment',
                            })}
                        />
                    </FormRow>
                )
            })}
            {Array.from({ length: numExercisesToBeAdded }, (_, index) => {
                return (
                    <FormRow
                        label="sets"
                        error={errors.sets?.[index]?.message}
                        key={index}
                    >
                        <Input
                            type="number"
                            id="sets"
                            placeholder="ex: 10"
                            {...register(`sets.${index}`, {
                                required: 'Missing Sets Number',
                                min: {
                                    value: 1,
                                    message:
                                        'Add 1 minimum set to the exercise',
                                },
                            })}
                        ></Input>
                    </FormRow>
                )
            })}
            {Array.from({ length: numExercisesToBeAdded }, (_, index) => {
                return (
                    <FormRow
                        label="Rest Time"
                        error={errors.restTime?.[index]?.message}
                        key={index}
                    >
                        <Input
                            type="number"
                            id="restTime"
                            placeholder="ex: 10"
                            {...register(`restTime.${index}`, {
                                required: 'Missing Rest Time',
                                min: {
                                    value: 15,
                                    message:
                                        'Add a minimum 15 seconds rest time between sets. ',
                                },
                            })}
                        ></Input>
                    </FormRow>
                )
            })}

            {/* <DrawerFooter> */}

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
