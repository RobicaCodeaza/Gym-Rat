import React, {
    ComponentPropsWithoutRef,
    ReactNode,
    type ReactElement,
} from 'react'
import { Label } from '../components/aceternity/Label'
import { cn } from '../lib/utils'

type FormRowProps = {
    children: ReactElement[] | ReactElement
    label?: string
    error?: string
} & ComponentPropsWithoutRef<'div'>
function FormRow({ children, label, error, className }: FormRowProps) {
    function isReactElementWithId(
        node: ReactElement
    ): node is ReactElement<{ id: string }> {
        return (
            typeof node === 'object' &&
            node !== null &&
            'props' in node &&
            'id' in node.props
        )
    }

    return (
        <div
            className={`flex flex-col justify-center gap-5 border-b border-cod-gray-600 py-4 has-[button]:flex has-[button]:flex-row has-[button]:justify-end has-[button]:gap-4 has-[button]:border-none phone:grid phone:grid-cols-[24rem_1fr_1.5fr] phone:items-center phone:gap-6 tab-port:grid-cols-[24rem_1fr_1fr] tab-port:gap-8 tab-land:grid-cols-[24rem_1fr_0.75fr] tab-land:gap-10 particular-small-laptop:grid-cols-[24rem_1fr_0.5fr] ${className}`}
            style={{}}
        >
            {React.Children.map(children, (child) => {
                if (
                    React.isValidElement(child) &&
                    isReactElementWithId(child)
                ) {
                    return (
                        <>
                            {label && (
                                <Label
                                    htmlFor={child.props.id}
                                    className="text-cod-gray-100"
                                ></Label>
                            )}
                            {child}
                            {error && (
                                <span className="flex text-center text-danger-500 phone:text-left">
                                    {error}
                                </span>
                            )}
                        </>
                    )
                } else return <>{child}</>
            })}
        </div>
    )
}

export const LabelInputContainer = ({
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

export default FormRow
