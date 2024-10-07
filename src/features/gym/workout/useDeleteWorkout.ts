import { deleteWorkout as deleteWorkoutApi } from '@/services/apiWorkout'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useDeleteWorkout() {
    const queryClient = useQueryClient()

    const { isPending: isDeleting, mutate: deleteWorkout } = useMutation({
        mutationFn: deleteWorkoutApi,
        onSuccess: async () => {
            toast.success('Workout successfully deleted.')
            await queryClient.invalidateQueries({
                queryKey: ['workouts'],
            })
        },
        onError: (err: Error) => toast.error(err.message),
    })

    return { isDeleting, deleteWorkout }
}
