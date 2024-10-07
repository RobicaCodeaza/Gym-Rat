import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer'

import { useRef, cloneElement, type ReactElement, type ReactNode } from 'react'
import ButtonIcon from '@/ui/ButtonIcon'
import CreateWorkoutForm from './CreateWorkoutForm.tsx'
import { Tables } from '@/types/database.types.ts'

type FormWorkoutTriggerProps = {
    children: ReactNode
    width: 'full' | 'auto'
    workoutToEdit?: Tables<'Workout'>
}

function FormWorkoutTrigger({
    children,
    width,
    workoutToEdit,
}: FormWorkoutTriggerProps) {
    const close = useRef(null)

    return (
        <Drawer>
            <DrawerTrigger className={`w-${width}`}>
                {cloneElement(children as ReactElement, {})}
            </DrawerTrigger>
            <DrawerContent className="tab-port:px-30 mx-auto flex flex-col justify-items-center bg-cod-gray-950 px-10 py-5 phone:px-24 phone:py-16 tab-port:py-12 tab-land:px-36 tab-land:py-16 particular-small-laptop:w-2/3 particular-small-laptop:px-44 particular-small-laptop:py-20">
                <DrawerClose ref={close} className="absolute right-6 top-6">
                    <ButtonIcon as="div">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12"
                            viewBox="0 0 24 24"
                            stroke="#d1d1d1"
                            fill="none"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M18 6l-12 12" />
                            <path d="M6 6l12 12" />
                        </svg>
                    </ButtonIcon>
                </DrawerClose>
                <DrawerHeader>
                    <DrawerTitle className="mb-10 ml-auto mr-auto text-[2.4rem] font-medium text-dodger-blue-900">
                        New Workout
                    </DrawerTitle>
                </DrawerHeader>

                <CreateWorkoutForm
                    workoutToEdit={workoutToEdit}
                ></CreateWorkoutForm>
            </DrawerContent>
        </Drawer>
    )
}

export default FormTriggerFlashcards
