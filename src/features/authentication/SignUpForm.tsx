import React, { Dispatch } from 'react'
import { Label } from '@/components/aceternity/Label'
import { Input } from '@/components/aceternity/Input'
import { cn } from '@/lib/utils'
import { FieldErrors, SubmitHandler, useForm } from 'react-hook-form'
import { useSignup } from './useSignup'
import { IconBrandGoogle } from '@tabler/icons-react'

type SignUpProps = {
    toggleForm: Dispatch<React.SetStateAction<boolean>>
}

type SignUpInputs = {
    firstname: string
    lastname: string
    email: string
    password: string
}

export function SignUpForm({ toggleForm }: SignUpProps) {
    const { handleSubmit, register, reset, formState } = useForm<SignUpInputs>()
    const { errors } = formState
    const { signup, isSigningUp } = useSignup()

    const onSubmit: SubmitHandler<SignUpInputs> = (data) => {
        signup(
            {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: data.password,
            },
            {
                onSuccess: () => {
                    reset()
                    toggleForm(true)
                },
            }
        )
    }
    const onError: SubmitHandler<FieldErrors> = (error) => {
        console.log('error', error)
    }
    return (
        <div className="mx-auto h-auto rounded-none bg-cod-gray-900/10 p-12 shadow-input backdrop-blur-sm phone:rounded-2xl phone:border-[0.5px] phone:border-cod-gray-600 phone:p-12 tab-port:p-16 tab-land:p-20">
            <h2 className="flex items-center justify-center gap-4 text-center text-2xl font-bold leading-[1.8] text-cod-gray-800 tab-port:gap-6 dark:text-cod-gray-100">
                <span className="text-sm text-starship-600">❚█══█❚</span>GymRat
                <span className="text-sm text-starship-600">❚█══█❚</span>
            </h2>
            <p className="mb-8 mt-2 text-center text-[1.3rem] text-cod-gray-600 dark:text-cod-gray-300">
                Create a GymRat account to maximise your gains.
            </p>

            <form
                className="flex flex-col"
                onSubmit={handleSubmit(onSubmit, onError)}
            >
                <div className="mb-8 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 phone:mb-10">
                    <div className="flex w-full flex-col gap-1">
                        <LabelInputContainer>
                            <Label htmlFor="firstname">First name</Label>
                            <Input
                                {...register('firstname', {
                                    required: 'Missing First Name.',
                                })}
                                id="firstname"
                                placeholder="Tyler"
                                type="text"
                                disabled={isSigningUp}
                            />
                        </LabelInputContainer>
                        {errors?.firstname?.message && (
                            <p className="text-sm text-red-500">
                                {errors?.firstname?.message}
                            </p>
                        )}
                    </div>
                    <div className="flex w-full flex-col">
                        <LabelInputContainer>
                            <Label htmlFor="lastname">Last name</Label>
                            <Input
                                {...register('lastname', {
                                    required: 'Missing Last Name.',
                                })}
                                id="lastname"
                                placeholder="Durden"
                                type="text"
                                disabled={isSigningUp}
                            />
                        </LabelInputContainer>
                        {errors?.lastname?.message && (
                            <p className="text-sm text-red-500">
                                {errors?.lastname?.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="mb-8 flex flex-col gap-1 phone:mb-10">
                    <LabelInputContainer className="">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            {...register('email', {
                                required: 'Provide Correct Email.',
                            })}
                            id="email"
                            placeholder="projectmayhem@fc.com"
                            type="email"
                            disabled={isSigningUp}
                        />
                    </LabelInputContainer>
                    {errors?.email?.message && (
                        <p className="text-sm text-red-500">
                            {errors?.email?.message}
                        </p>
                    )}
                </div>
                <div className="mb-8 flex flex-col gap-1 phone:mb-10">
                    <LabelInputContainer className="">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            {...register('password', {
                                required: 'Provide Correct Password.',
                            })}
                            id="password"
                            placeholder="••••••••"
                            type="password"
                            disabled={isSigningUp}
                        />
                    </LabelInputContainer>
                    {errors?.password?.message && (
                        <p className="text-sm text-red-500">
                            {errors?.password?.message}
                        </p>
                    )}
                </div>
                <button
                    className="group/btn relative flex h-10 w-full items-center justify-center rounded-md bg-gradient-to-br from-black to-neutral-600 py-6 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] disabled:cursor-not-allowed disabled:opacity-50 dark:bg-starship-500 dark:from-dodger-blue-700 dark:to-dodger-blue-600 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                    disabled={isSigningUp}
                >
                    Sign up &rarr;
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
                    className="mx-auto block cursor-pointer text-center text-[1.3rem] text-cod-gray-700 underline transition-all duration-100 hover:text-cod-gray-800 dark:text-cod-gray-300 hover:dark:text-cod-gray-200"
                    onClick={() => {
                        toggleForm(true)
                        reset()
                    }}
                >
                    Already have an account? Sign in.
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

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <div
            className={cn(
                'flex w-full flex-col space-y-2 tab-port:space-y-3',
                className
            )}
        >
            {children}
        </div>
    )
}
