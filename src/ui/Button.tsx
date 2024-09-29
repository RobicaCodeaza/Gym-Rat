import {
    type ReactNode,
    type ComponentPropsWithoutRef,
    type ElementType,
} from 'react'

type ButtonProps<T extends ElementType> = {
    as?: T
    variation:
        | 'shimmer'
        | 'accentPrimary'
        | 'accentSecondary'
        | 'accentTertiary'
        | 'simplePrimary'
        | 'simpleSecondary'
        | 'simpleTertiary'
        | 'subtleGrey'
        | 'subtleWhite'
        | 'danger'
    size: 'tiny' | 'small' | 'medium' | 'large' | 'huge'
    animationType?: 'movingBorder' | 'glowingBorder' | 'unapologetic'
    children: ReactNode
    otherClasses?: string

    handleClick?: () => void
} & ComponentPropsWithoutRef<T>

function Button<C extends ElementType>({
    as,
    variation,
    children,
    size,
    animationType,
    otherClasses,
    handleClick,
    ...props
}: ButtonProps<C>) {
    function onClickFunction() {
        handleClick?.()
    }
    if (animationType !== undefined) {
        if (animationType === 'movingBorder')
            return (
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cod-gray-400 focus:ring-offset-2 focus:ring-offset-cod-gray-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#b9ebff_0%,#068fff_50%,#b9ebff_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-cod-gray-950 px-3 py-1 text-sm font-medium text-cod-gray-100 backdrop-blur-3xl">
                        Border Magic
                    </span>
                </button>
            )
        if (animationType === 'glowingBorder')
            return (
                <button className="group relative inline-block cursor-pointer rounded-full bg-cod-gray-950 p-px text-xs font-semibold leading-6 text-cod-gray-100 no-underline shadow-2xl shadow-cod-gray-darker">
                    <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span className="bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(6, 143, 255, 0.6)_0%,rgba(18, 18, 18, 0.2)_75%)] absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </span>
                    <div className="relative z-10 flex items-center space-x-2 rounded-full bg-cod-gray-950 px-4 py-0.5 ring-1 ring-cod-gray-100/10">
                        <span>Tailwind Connect</span>
                        <svg
                            fill="none"
                            height="16"
                            viewBox="0 0 24 24"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.75 8.75L14.25 12L10.75 15.25"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </div>
                    <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-lima-400/0 via-lima-400/90 to-lima-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
            )
        if (animationType === 'unapologetic')
            return (
                <button className="group relative border border-cod-gray-950 bg-transparent px-8 py-2 text-cod-gray-950 transition duration-200 dark:border-cod-gray-100">
                    <div className="absolute -bottom-2 -right-2 -z-10 h-full w-full bg-dodger-blue-400 transition-all duration-200 group-hover:bottom-0 group-hover:right-0" />
                    <span className="relative">Unapologetic</span>
                </button>
            )
    } else {
        const button = {
            variation: {
                shimmer:
                    'inline-flex animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50',
                accentPrimary:
                    'rounded bg-dodger-blue-500 hover:bg-dodger-blue-600 text-cod-gray-50 hover:text-cod-gray-50 active:bg-dodger-blue-700  active:text-cod-gray-100',
                accentSecondary:
                    'rounded bg-starship-500 hover:bg-starship-600 text-cod-gray-50 hover:text-cod-gray-50 active:bg-starship-700  active:text-cod-gray-100',
                accentTertiary:
                    'rounded bg-lima-500 hover:bg-lima-600 text-cod-gray-50 hover:text-cod-gray-50 active:bg-lima-700  active:text-cod-gray-100',
                simplePrimary: `border rounded border-dodger-blue-500 hover:border-dodger-blue-600 text-dodger-blue-500 hover:text-dodger-blue-600 active:border-dodger-blue-700  active:text-dodger-blue-700`,
                simpleTertiary: `border rounded border-lima-500 hover:border-lima-600 text-lima-500 hover:text-lima-600 active:border-lima-700  active:text-lima-700`,
                simpleSecondary: `border rounded border-starship-500 hover:border-starship-600 text-starship-500 hover:text-starship-600 active:border-starship-700  active:text-starship-700`,
                subtleGrey:
                    'bg-cod-gray-100 rounded outline outline-offset-0 outline-none   text-cod-gray-500 hover:bg-cod-gray-50  hover:text-cod-gray-700 hover:outline-2 hover:outline-dodger-blue-400 focus:bg-cod-gray-50',
                subtleWhite:
                    'bg-dodger-blue-50 rounded outline outline-none outline-offset-0  text-cod-gray-500  hover:text-cod-gray-700 hover:outline-2  hover:outline-dodger-blue-400',
                danger: 'rounded bg-danger-600 hover:bg-danger-700 text-cod-gray-100 hover:text-cod-gray-200 active:bg-danger-800  active:text-cod-gray-300',
            },
            size: {
                tiny: 'px-2 py-1 text-center text-sm font-medium uppercase',
                small: 'px-3 py-1 text-center text-[1.3rem] font-semibold uppercase tracking-wider phone:px-4 py-2',
                medium: 'px-7 py-3 text-[1.4rem] tracking-wide',
                large: 'px-10 py-5 text-[1.6rem] ',
                huge: 'px-12 py-6 text-[2.4rem]',
            },
        }

        const Component = as ?? 'button'
        return (
            <Component
                onClick={onClickFunction}
                className={`flex cursor-pointer items-center justify-center gap-1 ${button.variation[variation]} ${button.size[size]} ${otherClasses}`}
                {...props}
            >
                {children}
            </Component>
        )
    }
}
