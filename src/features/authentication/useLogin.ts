import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login as loginApi } from '@/services/apiAuth'
import toast from 'react-hot-toast'

export function useLogin() {
    const queryClient = useQueryClient()

    const { isPending: isLoggingIn, mutate: login } = useMutation({
        mutationFn: ({
            email,
            password,
        }: {
            email: string
            password: string
        }) => loginApi(email, password),
        onSuccess: (user) => {
            console.log('user', user)
            queryClient.setQueryData(['user'], user)
            toast.success('You have been logged successfully.')
        },
        onError: (error: Error) => {
            toast.error(error.message)
        },
    })

    return {
        isLoggingIn,
        login,
    }
}
