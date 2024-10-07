import { createEditWorkout as createEditWorkoutApi } from '@/services/apiWorkout'
import { Tables } from '@/types/database.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import toast from 'react-hot-toast'
export function useCreateQuiz() {
    const queryClient = useQueryClient()

    const { isPending: isCreating, mutate: createWorkout } = useMutation({
        mutationFn: (workout: Tables<'Workout'>) => createEditWorkoutApi(workout, null),
        onSuccess: async () => {
            toast.success('Workout successfully created.')
            await queryClient.invalidateQueries({
                queryKey: ['workouts'],
            })
        },
        onError: (err: Error) =>
            toast.error(
                `${err.message}.Check if there is any duplicate naming.`
            ),
    })

    return { isCreating, createWorkout }
}
