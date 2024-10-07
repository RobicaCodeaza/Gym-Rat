import { deleteAllWorkouts as deleteAllWorkoutsApi } from '@/services/apiWorkout'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useDeleteAllWorkouts() {
    const queryClient = useQueryClient()

    const { isPending: isDeleting, mutate: deleteAllWorkouts } = useMutation({
        mutationFn: deleteAllWorkoutsApi,
        onSuccess: async () => {
            toast.success('Workout successfully deleted.')
            await queryClient.invalidateQueries({
                queryKey: ['workouts'],
            })
        },
        onError: (err: Error) => toast.error(err.message),
    })

    return { isDeleting, deleteAllWorkouts }
}
