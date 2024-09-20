import React, { Dispatch } from 'react'
import { Label } from '@/components/aceternity/Label'
import { Input } from '@/components/aceternity/Input'
import { cn } from '@/lib/utils'
import { IconBrandGoogle } from '@tabler/icons-react'

type LoginProps = {
    toggleForm: Dispatch<React.SetStateAction<boolean>>
}

export function LoginForm({ toggleForm }: LoginProps) {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form submitted')
    }
    return (
        <div className="mx-auto h-auto rounded-none bg-cod-gray-900/10 p-12 shadow-input backdrop-blur-sm phone:min-w-[35rem] phone:rounded-2xl phone:border-[0.5px] phone:border-cod-gray-600 phone:p-12 tab-port:min-w-[40rem] tab-port:p-16 tab-land:p-20">
            <h2 className="flex items-center justify-center gap-4 text-center text-2xl font-bold leading-[1.8] text-cod-gray-800 dark:text-cod-gray-100 tab-port:gap-6">
                <span className="text-sm text-starship-600">❚█══█❚</span>GymRat
                <span className="text-sm text-starship-600">❚█══█❚</span>
            </h2>
            <p className="mb-8 mt-2 text-center text-sm text-cod-gray-600 dark:text-cod-gray-300">
                Welcome back to your GymRat.
            </p>

            <form
                className="flex-flex-col items-center"
                onSubmit={handleSubmit}
            >
                {/* <div className="mb-8 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0 phone:mb-10">
                    <LabelInputContainer>
                        <Label htmlFor="firstname">First name</Label>
                        <Input id="firstname" placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="lastname">Last name</Label>
                        <Input id="lastname" placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div> */}
                <LabelInputContainer className="mb-8 phone:mb-10">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                        id="email"
                        placeholder="projectmayhem@fc.com"
                        type="email"
                    />
                </LabelInputContainer>
                <LabelInputContainer className="mb-8 phone:mb-10">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        placeholder="••••••••"
                        type="password"
                    />
                </LabelInputContainer>

                <button
                    className="group/btn relative block h-10 w-full rounded-lg bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-starship-500 dark:from-starship-700 dark:to-starship-600 dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Login &rarr;
                    <BottomGradient />
                </button>

                <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

                {/* <div className="flex flex-col space-y-4">
                    <button
                        className="group/btn relative flex h-10 w-1/2 items-center justify-start space-x-2 rounded-lg bg-cod-gray-darkest px-4 font-medium text-white shadow-input dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                        type="submit"
                    >
                        <IconBrandGoogle className="h-4 w-4 text-cod-gray-800 dark:text-cod-gray-300" />
                        <span className="text-sm text-cod-gray-700 dark:text-cod-gray-300">
                            Google
                        </span>
                        <BottomGradient />
                    </button>
                </div> */}
                <button
                    className="mx-auto block cursor-pointer text-center text-sm text-cod-gray-700 underline transition-all duration-100 hover:text-cod-gray-800 dark:text-cod-gray-300 hover:dark:text-cod-gray-200"
                    onClick={() => toggleForm(false)}
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
