import { createEditWorkout as createEditWorkoutApi } from '@/services/apiWorkout'
import { Tables } from '@/types/database.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import toast from 'react-hot-toast'
export function useEditWorkout() {
    const queryClient = useQueryClient()

    const { isPending: isUpdating, mutate: updateWorkout } = useMutation({
        mutationFn: ({ data, id }: { data: Tables<'Workout'>; id: number }) =>
            createEditWorkoutApi(data, id),
        onSuccess: async () => {
            toast.success('Workout successfully edited.')
            await queryClient.invalidateQueries({
                queryKey: ['workouts'],
            })
        },
        onError: (err: Error) =>
            toast.error(
                `${err.message}.Check if there is any duplicate naming.`
            ),
    })

    return { isUpdating, updateWorkout }
}
