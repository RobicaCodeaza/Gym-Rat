/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from '@/lib/utils'
import { IconLayoutNavbarCollapse } from '@tabler/icons-react'
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useRef, useState } from 'react'

export const FloatingDock = ({
    items,
    desktopClassName,
    // mobileClassName,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[]
    desktopClassName?: string
    // mobileClassName?: string
}) => {
    return (
        <>
            <FloatingDockDesktop items={items} className={desktopClassName} />
            {/* <FloatingDockMobile items={items} className={mobileClassName} /> */}
        </>
    )
}

const FloatingDockMobile = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[]
    className?: string
}) => {
    const [open, setOpen] = useState(false)
    return (
        <div className={cn('relative hidden', className)}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
                    >
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: {
                                        delay: idx * 0.05,
                                    },
                                }}
                                transition={{
                                    delay: (items.length - 1 - idx) * 0.05,
                                }}
                            >
                                <NavLink
                                    to={item.href}
                                    key={item.title}
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-cod-gray-50 dark:bg-cod-gray-900"
                                >
                                    <div className="">{item.icon}</div>
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cod-gray-50 dark:bg-cod-gray-800"
            >
                <IconLayoutNavbarCollapse className="h-5 w-5 text-cod-gray-500 dark:text-cod-gray-400" />
            </button>
        </div>
    )
}

const FloatingDockDesktop = ({
    items,
    className,
}: {
    items: { title: string; icon: React.ReactNode; href: string }[]
    className?: string
}) => {
    let mouseX = useMotionValue(Infinity)
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                'mx-auto flex h-16 items-end gap-4 rounded-2xl border border-cod-gray-400 bg-cod-gray-50 px-8 pb-3 dark:bg-cod-gray-950',
                className
            )}
        >
            {items.map((item) => (
                <IconContainer mouseX={mouseX} key={item.title} {...item} />
            ))}
        </motion.div>
    )
}

function IconContainer({
    mouseX,
    title,
    icon,
    href,
}: {
    mouseX: MotionValue
    title: string
    icon: React.ReactNode
    href: string
}) {
    let ref = useRef<HTMLDivElement>(null)

    let distance = useTransform(mouseX, (val) => {
        let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }

        return val - bounds.x - bounds.width / 2
    })

    let widthTransform = useTransform(distance, [-50, 0, 50], [40, 80, 40])
    let heightTransform = useTransform(distance, [-50, 0, 50], [40, 80, 40])
    console.log(widthTransform)

    let widthTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [20, 40, 20]
    )
    let heightTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [20, 40, 20]
    )

    let width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 8,
    })
    let height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 8,
    })

    // let widthIcon = useSpring(widthTransformIcon, {
    //     mass: 0.1,
    //     stiffness: 150,
    //     damping: 8,
    // })
    // let heightIcon = useSpring(heightTransformIcon, {
    //     mass: 0.1,
    //     stiffness: 150,
    //     damping: 8,
    // })

    const [hovered, setHovered] = useState(false)

    return (
        <NavLink to={href}>
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative flex aspect-square items-center justify-center rounded-full bg-cod-gray-200 dark:bg-cod-gray-900"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: '-50%' }}
                            animate={{ opacity: 1, y: 0, x: '-50%' }}
                            exit={{ opacity: 0, y: 2, x: '-50%' }}
                            className="absolute -top-8 left-1/2 w-fit -translate-x-1/2 whitespace-pre rounded-md border border-cod-gray-200 bg-cod-gray-100 px-2 py-0.5 text-xs text-cod-gray-700 dark:border-cod-gray-900 dark:bg-cod-gray-800 dark:text-white"
                        >
                            {title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    // style={{ width: widthIcon, height: heightIcon }}
                    className="flex items-center justify-center"
                >
                    {icon}
                </motion.div>
            </motion.div>
        </NavLink>
    )
}
