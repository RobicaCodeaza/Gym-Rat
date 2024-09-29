import {
    cloneElement,
    createContext,
    type Dispatch,
    type LegacyRef,
    type PropsWithChildren,
    ReactElement,
    type SetStateAction,
    useContext,
    useState,
} from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import useOutsideClick from '../hooks/useOutsideClick'
import ButtonIcon from './ButtonIcon'

type ModalContextType = {
    openName: string
    open: Dispatch<SetStateAction<string>>
    close: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

function Modal({ children }: PropsWithChildren) {
    const [openName, setOpenName] = useState<string>('')

    const open = setOpenName
    function close() {
        setOpenName('')
    }

    return (
        <ModalContext.Provider value={{ openName, open, close }}>
            {children}
        </ModalContext.Provider>
    )
}

type OpenProps = {
    opensWindow: string
}

function Open({ children, opensWindow }: PropsWithChildren<OpenProps>) {
    const context = useContext(ModalContext)
    if (context === undefined || context === null)
        throw new Error(
            "Accessed the Modal's context inside a component that does not have access to it."
        )
    const { open } = context

    function handleOpen() {
        open(opensWindow)
    }

    return (
        <>{cloneElement(children as ReactElement, { onClick: handleOpen })}</>
    )
}

type WindowProps = {
    titleOfWindow: string
    nameOfWindow: string
    type?: 'regular' | 'form'
    animation?: 'yes' | 'no'
}

function Window({
    children,
    nameOfWindow,
    titleOfWindow,
    type,
    animation,
}: PropsWithChildren<WindowProps>) {
    const context = useContext(ModalContext)
    if (context === undefined || context === null)
        throw new Error(
            "Accessed the Modal's context inside a component that does not have access to it."
        )
    const { close, openName } = context

    const ref = useOutsideClick(close, true) as LegacyRef<HTMLDivElement>

    if (openName !== nameOfWindow) return

    if (animation === 'yes')
        return createPortal(
            <div
                className={`fixed left-0 top-0 h-screen w-full ${type === 'regular' ? 'bg-backdrop-color-50' : 'bg-dodger-blue-900 bg-opacity-30'} backdrop-blur-sm`}
                key="modal"
            >
                <motion.div
                    className={`tab-land:px-18 tab-land:py-18 fixed left-1/2 top-1/2 flex translate-x-[-50%] translate-y-[-50%] flex-col gap-4 rounded-2xl bg-cod-gray-900 px-4 py-4 shadow-lg phone:px-8 phone:py-8 tab-port:px-12 tab-port:py-12 ${type === 'regular' ? '' : 'bg-gradient-to-tl from-dodger-blue-950 to-dodger-blue-600'}`}
                    initial={{ scale: 0.8, opacity: 0, y: 0 }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                        translateX: '-50%',
                        translateY: '-50%',
                    }}
                    exit={{ scale: 0.8, opacity: 0, y: -50 }}
                    transition={{
                        duration: 0.3,
                        type: 'spring',
                        stiffness: 250,
                    }}
                    ref={ref}
                >
                    <div className="flex items-center justify-between">
                        <p className="ml-auto mr-auto text-[1.8rem] font-medium text-cod-gray-100">
                            {titleOfWindow}
                        </p>
                        <ButtonIcon
                            positionAlign="end"
                            onClick={close}
                            otherClasses="text-cod-gray-200 "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12"
                                viewBox="0 0 24 24"
                                stroke="#e7e7e7"
                                fill="none"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M10 10l4 4m0 -4l-4 4" />
                                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                            </svg>
                        </ButtonIcon>
                    </div>
                    <div>
                        {cloneElement(children as ReactElement, {
                            onCloseModal: close,
                        })}
                    </div>
                </motion.div>
            </div>,
            document.body
        )
    else
        return createPortal(
            <div
                className={`fixed left-0 top-0 h-screen w-full ${type === 'regular' ? 'bg-backdrop-color-50' : 'bg-dodger-blue-900 bg-opacity-30'} backdrop-blur-sm`}
                key="modal"
            >
                <div
                    className={`tab-land:px-18 tab-land:py-18 fixed left-1/2 top-1/2 flex translate-x-[-50%] translate-y-[-50%] flex-col gap-4 rounded-2xl bg-cod-gray-900 px-4 py-4 shadow-lg phone:px-8 phone:py-8 tab-port:px-12 tab-port:py-12 ${type === 'regular' ? '' : 'bg-gradient-to-tl from-dodger-blue-950 to-dodger-blue-600'}`}
                    ref={ref}
                >
                    <div className="flex items-center justify-between">
                        <p className="ml-auto mr-auto text-[1.8rem] font-medium text-cod-gray-100">
                            {titleOfWindow}
                        </p>
                        <ButtonIcon
                            positionAlign="end"
                            onClick={close}
                            otherClasses="text-cod-gray-200 "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-12 w-12"
                                viewBox="0 0 24 24"
                                stroke="#e7e7e7"
                                fill="none"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M10 10l4 4m0 -4l-4 4" />
                                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
                            </svg>
                        </ButtonIcon>
                    </div>
                    <div>
                        {cloneElement(children as ReactElement, {
                            onCloseModal: close,
                        })}
                    </div>
                </div>
            </div>,
            document.body
        )
}

Modal.Window = Window
Modal.Open = Open

export default Modal
