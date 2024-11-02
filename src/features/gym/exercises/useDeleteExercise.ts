import { deleteExercise as deleteExerciseApi } from '@/services/apiExercises'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export function useDeleteExercise() {
    const queryClient = useQueryClient()

    const { isPending: isDeleting, mutate: deleteExercise } = useMutation({
        mutationFn: deleteExerciseApi,
        onSuccess: async () => {
            toast.success('Exercise successfully deleted.')
            await queryClient.invalidateQueries({
                queryKey: ['exercises'],
            })
        },
        onError: (err: Error) => toast.error(err.message),
    })

    return { isDeleting, deleteExercise }
}
