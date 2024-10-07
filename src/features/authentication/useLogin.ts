import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login as loginApi } from '@/services/apiAuth'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export function useLogin() {
    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const { isPending: isLoggingIn, mutate: login } = useMutation({
        mutationFn: ({
            email,
            password,
        }: {
            email: string
            password: string
        }) => loginApi(email, password),
        onSuccess: (user) => {
            queryClient.setQueryData(['user'], user)
            navigate('/dashboard', { replace: true })
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
