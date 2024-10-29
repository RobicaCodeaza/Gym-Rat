import { useState } from 'react'
import { useCreateWorkout } from './useCreateWorkout'
import { useEditWorkout } from './useEditWorkout'
import { RiDeleteBin5Line } from 'react-icons/ri'

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
import { Label } from '../../../components/aceternity/Label'
import { useUser } from '../../authentication/useUser'

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
    const { user } = useUser()
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

    function handleAddExercise(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        setNumExercisesToBeAdded(numExercisesToBeAdded + 1)
    }

    const onSubmit: SubmitHandler<FieldValuesCreateWorkoutForm> = (data) => {
        console.log(data)
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
            const exercisesToBeAdded = Array.from({
                length: numExercisesToBeAdded,
            }).map((_, index) => {
                return {
                    exercises: data.exerciseId[index],
                    equipment: data.equipmentId[index],
                    restTime: data.restTime[index],
                    sets: data.sets[index],
                }
            })

            const newData = {
                ...data,
                exercises: exercisesToBeAdded,
                completionRate: null,
                lastWorkedOut: null,
                supersets: null,
                totalSets: null,
                totalWorkoutTime: null,
                user_id: user?.user_metadata.user_id,
            }

            createWorkout(newData, {
                onSuccess: () => {
                    reset()
                },
            })
        }
    }
    const onError: SubmitErrorHandler<FieldError> = (error, e) => {
        console.log(error, e)
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
            className="flex max-h-screen w-full flex-col gap-4 overflow-hidden overflow-y-scroll rounded-md border border-cod-gray-600 px-8 py-4 text-[1.4rem] phone:gap-10 phone:px-6 phone:py-4 tab-port:gap-12 tab-port:px-10 tab-port:py-6 tab-land:gap-14"
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
            <Button
                as={'button'}
                variation="simpleTertiary"
                size="small"
                otherClasses="self-center phone:mt-4 "
                onClick={(e) => handleAddExercise(e)}
            >
                Add Exercise
            </Button>

            {Array.from({ length: numExercisesToBeAdded }, (_, index) => {
                return (
                    <div
                        className="flex animate-afterEffect flex-col gap-8 rounded-lg bg-cod-gray-900 bg-gradient-to-r from-cod-gray-950 to-dodger-blue-950 px-8 py-6 phone:justify-between phone:px-4 phone:py-8 tab-port:flex-row tab-port:items-start tab-port:gap-0 tab-port:px-8"
                        key={index}
                    >
                        <span className="self-center rounded-full bg-dodger-blue-950 p-4 text-sm text-cod-gray-200">
                            {index + 1}
                        </span>

                        <div className="flex flex-col items-center gap-4 phone:gap-6">
                            <Label htmlFor="exercises">Exercises</Label>
                            <Select
                                key={index}
                                id="exercises"
                                currentValue={'2'}
                                options={exercisesIdOptions}
                                {...register(`exerciseId.${index}`, {
                                    required: 'Missing Exercise',
                                })}
                            />
                            {errors?.exerciseId?.[index] && (
                                <p className="text-sm text-red-500">
                                    {errors?.exerciseId?.[index]?.message}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col items-center gap-4 phone:gap-6">
                            <Label htmlFor="equipment">Equipment</Label>
                            <Select
                                key={index}
                                id="equipment"
                                currentValue={'1'}
                                options={equipmentIdOptions}
                                {...register(`equipmentId.${index}`, {
                                    required: 'Missing Equipment',
                                })}
                            />
                            {errors?.equipmentId?.[index] && (
                                <p className="text-sm text-red-500">
                                    {errors?.equipmentId?.[index]?.message}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col items-center gap-4 phone:gap-6">
                            <Label htmlFor="sets">Sets</Label>
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
                            {errors?.sets?.[index] && (
                                <p className="text-sm text-red-500">
                                    {errors?.sets?.[index]?.message}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col items-center gap-4 phone:gap-6">
                            <Label htmlFor="restTime">Rest Time</Label>
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
                            {errors?.restTime?.[index] && (
                                <p className="text-sm text-red-500">
                                    {errors?.restTime?.[index]?.message}
                                </p>
                            )}
                        </div>
                        <button className="self-center">
                            <RiDeleteBin5Line className="h-9 w-9 text-danger-600 transition-all duration-300 hover:text-danger-500"></RiDeleteBin5Line>
                        </button>
                    </div>
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
