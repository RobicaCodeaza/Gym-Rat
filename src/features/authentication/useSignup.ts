import { useMutation, useQueryClient } from '@tanstack/react-query'
import { signup as signupApi } from '@/services/apiAuth'
import toast from 'react-hot-toast'

export function useSignup() {
    // const queryClient = useQueryClient()

    const { isPending: isSigningUp, mutate: signup } = useMutation({
        mutationFn: ({
            firstname,
            lastname,
            email,
            password,
        }: {
            firstname: string
            lastname: string
            email: string
            password: string
        }) => signupApi(firstname, lastname, email, password),
        onSuccess: () => {
            // console.log('user', user)
            // queryClient.setQueryData(['user'], user)
            toast.success(
                'Account successfully created.Please verify the new account from the user email address.'
            )
        },
        onError: (error: Error) => {
            toast.error(error.message)
        },
    })

    return {
        isSigningUp,
        signup,
    }
}
