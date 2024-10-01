import useOutsideClick from '@/hooks/useOutsideClick'
import {
    type PropsWithChildren,
    useState,
    useEffect,
    type SetStateAction,
    type Dispatch,
    useContext,
    type ReactNode,
    type ReactElement,
    LegacyRef,
    ElementType,
    ComponentPropsWithoutRef,
} from 'react'
import { motion } from 'framer-motion'
import { createContext } from 'react'
import { createPortal } from 'react-dom'
import { RiMore2Line } from 'react-icons/ri'

type MenusContextType = {
    openId: number
    open: Dispatch<SetStateAction<number>>
    close: () => void
    position: { x: number; y: number }
    setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>
}

const MenusContext = createContext<MenusContextType | null>(null)

function Menus({ children }: PropsWithChildren) {
    const [openId, setIsOpenId] = useState<number>(0)
    const [position, setPosition] = useState<{ x: number; y: number }>({
        x: 0,
        y: 0,
    })
    const open = setIsOpenId
    function close() {
        setIsOpenId(0)
    }

    useEffect(
        function () {
            function handleScroll() {
                if (openId !== 0) {
                    close()
                    document.removeEventListener('wheel', handleScroll)
                }
            }

            document.addEventListener('wheel', handleScroll)
            return document.removeEventListener('wheel', handleScroll)
        },
        [openId]
    )

    return (
        <MenusContext.Provider
            value={{ openId, open, close, position, setPosition }}
        >
            {children}
        </MenusContext.Provider>
    )
}

function Menu({ children }: PropsWithChildren) {
    return (
        <div className="flex items-center justify-end phone:justify-center">
            {children}
        </div>
    )
}

type ToggleProps = { id: number }

function Toggle({ id }: ToggleProps) {
    const { openId, open, close, setPosition } = useContext(MenusContext)!

    function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.stopPropagation()

        if (!e) return

        const rect = (e.target as HTMLButtonElement)
            ?.closest('button')
            ?.getBoundingClientRect()

        setPosition({
            x: window.innerWidth - rect!.x - rect!.width,
            y: rect!.y + rect!.height + 8,
        })

        if (openId === 0 || openId !== id) open(id)
        else close()
    }

    return (
        <button
            className="rounded-2xl border-none bg-none p-2 transition-all hover:bg-dodger-blue-100"
            onClick={handleClick}
        >
            <RiMore2Line className="h-9 w-9 text-dodger-blue-600"></RiMore2Line>
        </button>
    )
}

type ListProps = {
    id: number
    children: ReactNode
}

function List({ id, children }: ListProps) {
    const { openId, position, close } = useContext(MenusContext)!
    const ref = useOutsideClick(close, false) as LegacyRef<HTMLUListElement>

    if (openId !== id) return
    console.log(openId, position)

    return createPortal(
        <motion.ul
            initial={{ opacity: 0, y: '-10%', scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: '-30%', scale: 0.8 }}
            transition={{ duration: 0.1, type: 'spring', stiffness: 100 }}
            className={`fixed z-10 rounded-md border border-cod-gray-600 bg-cod-gray-900 shadow-sm`}
            style={{ top: `${position.y}px`, right: `${position.x}px` }}
            ref={ref}
        >
            {children}
        </motion.ul>,
        document.body
    )
}

type ButtonProps<T extends ElementType> = {
    children: ReactNode
    icon: ReactElement
    as?: T
    onClick?: () => void
} & ComponentPropsWithoutRef<T>
function Button<T extends ElementType>({
    children,
    onClick,
    icon,
    as,
}: ButtonProps<T>) {
    const { close } = useContext(MenusContext)!

    function handlerButton() {
        if (onClick) onClick()
        close()
    }
    const Component = as ?? 'button'

    return (
        <li>
            <Component
                className="items-left flex w-full items-center gap-2 rounded-md border-none bg-none px-5 py-3 text-[1.4rem] hover:bg-cod-gray-800"
                onClick={handlerButton}
            >
                {icon}
                <span>{children}</span>
            </Component>
        </li>
    )
}

Menus.Menu = Menu
Menus.Toggle = Toggle
Menus.List = List
Menus.Button = Button

export default Menus
