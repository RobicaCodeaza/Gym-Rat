import React, { Dispatch } from 'react'
import { Label } from '@/components/aceternity/Label'
import { Input } from '@/components/aceternity/Input'
import { IconBrandGoogle } from '@tabler/icons-react'
import { useLogin } from './useLogin'
import { type FieldErrors, type SubmitHandler, useForm } from 'react-hook-form'
import Spinner from '../../ui/Spinner'
import FullPage from '../../ui/FullPage'
import { LabelInputContainer } from '../../ui/FormRow'

type LoginProps = {
    toggleForm: Dispatch<React.SetStateAction<boolean>>
}

type LoginInputs = {
    email: string
    password: string
}

export function LoginForm({ toggleForm }: LoginProps) {
    const { register, handleSubmit, formState, reset } = useForm<LoginInputs>()
    const { errors } = formState
    const { login, isLoggingIn } = useLogin()
    const onSubmit: SubmitHandler<LoginInputs> = (data) => {
        login(
            {
                email: data.email,
                password: data.password,
            },
            {
                onSuccess: () => {
                    reset()
                    // toggleForm(true)
                },
            }
        )
    }
    const onError: SubmitHandler<FieldErrors> = (error) => {
        console.log('error', error)
    }
    if (isLoggingIn)
        return (
            <FullPage>
                <Spinner></Spinner>
            </FullPage>
        )

    return (
        <div className="mx-auto h-auto rounded-none bg-cod-gray-900/10 p-12 shadow-input backdrop-blur-sm phone:min-w-[35rem] phone:rounded-2xl phone:border-[0.5px] phone:border-cod-gray-600 phone:p-12 tab-port:min-w-[40rem] tab-port:p-16 tab-land:p-20">
            <h2 className="flex items-center justify-center gap-4 text-center text-2xl font-bold leading-[1.8] text-cod-gray-800 tab-port:gap-6 dark:text-cod-gray-100">
                <span className="text-sm text-starship-600">❚█══█❚</span>GymRat
                <span className="text-sm text-starship-600">❚█══█❚</span>
            </h2>
            <p className="mb-10 mt-2 text-center text-[1.3rem] text-cod-gray-600 dark:text-cod-gray-300">
                Welcome back to your GymRat.
            </p>

            <form
                className="flex flex-col items-center gap-1"
                onSubmit={handleSubmit(onSubmit, onError)}
            >
                <LabelInputContainer className="mb-8 phone:mb-10">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                        {...register('email', {
                            required: 'Missing email',
                        })}
                    />
                    {errors?.email?.message && (
                        <p className="text-sm text-red-500">
                            {errors?.email?.message}
                        </p>
                    )}
                </LabelInputContainer>
                <LabelInputContainer className="mb-8 phone:mb-10">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        placeholder="••••••••"
                        type="password"
                        {...register('password', {
                            required: 'Missing password',
                        })}
                    />
                    {errors?.password?.message && (
                        <p className="text-sm text-red-500">
                            {errors?.password?.message}
                        </p>
                    )}
                </LabelInputContainer>
                <button
                    className="group/btn relative flex h-10 w-full items-center justify-center rounded-lg bg-gradient-to-br from-black to-neutral-600 py-6 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-starship-500 dark:from-starship-700 dark:to-starship-600 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Login &rarr;
                    <BottomGradient />
                </button>

                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                <div className="mb-8 flex w-full flex-col">
                    <button
                        className="group/btn relative flex h-10 items-center justify-center space-x-2 rounded-lg bg-cod-gray-darkest px-4 py-4 font-medium text-white shadow-input dark:bg-cod-gray-950 dark:shadow-[0px_0px_1px_1px_#454545]"
                        type="submit"
                    >
                        <IconBrandGoogle className="h-6 w-6 text-cod-gray-800 dark:text-cod-gray-300" />
                        <span className="text-base text-cod-gray-700 dark:text-cod-gray-400">
                            Google
                        </span>
                        <BottomGradient />
                    </button>
                </div>
                <button
                    className="mx-auto block cursor-pointer text-center text-[1.3rem] text-cod-gray-700 underline transition-all duration-100 hover:text-cod-gray-800 disabled:cursor-not-allowed disabled:opacity-50 dark:text-cod-gray-300 hover:dark:text-cod-gray-200"
                    disabled={isLoggingIn}
                    onClick={() => {
                        toggleForm(false)
                        reset()
                    }}
                >
                    Don&apos;t have an account? Sign up.
                </button>
            </form>
        </div>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    )
}
