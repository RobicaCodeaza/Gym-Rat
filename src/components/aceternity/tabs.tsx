'use client'

import { memo, ReactNode, useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { NavLink, Outlet } from 'react-router-dom'
import GymOverallView from '../../features/gym/GymOverallView'

export type Tab = {
    title: string
    value: string
    dummyContent?: string | React.ReactNode
    to: string
}

const Tabs = memo(function Tabs({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName,
    // children,
    withRoute,
    path,
}: {
    tabs: Tab[]
    containerClassName?: string
    activeTabClassName?: string
    tabClassName?: string
    contentClassName?: string
    // children: ReactNode
    withRoute?: 'yes' | 'no'
    path: string
}) {
    const [active, setActive] = useState<Tab>(propTabs[0])
    const [tabs, setTabs] = useState<Tab[]>(propTabs)

    const [hovering, setHovering] = useState(false)

    const moveSelectedTabToTop = useCallback(
        function (idx: number) {
            const newTabs = [...propTabs]
            const selectedTab = newTabs.splice(idx, 1)
            newTabs.unshift(selectedTab[0])
            setTabs(newTabs)
            setActive(newTabs[0])
        },
        [propTabs]
    )

    useEffect(
        function () {
            const indexOfActiveTab = propTabs.findIndex(
                (tab) => tab.value === path
            )
            moveSelectedTabToTop(indexOfActiveTab ? indexOfActiveTab : 0)
        },
        [path, moveSelectedTabToTop, propTabs]
    )

    return (
        <>
            <div
                className={cn(
                    'no-visible-scrollbar justify-between[perspective:1000px] relative flex flex-row items-center overflow-auto sm:overflow-visible',
                    containerClassName
                )}
            >
                {propTabs.map((tab, idx) => {
                    return withRoute === 'yes' ? (
                        <NavLink
                            to={tab.to}
                            key={tab.title}
                            onClick={() => {
                                moveSelectedTabToTop(idx)
                            }}
                            onMouseEnter={() => setHovering(true)}
                            onMouseLeave={() => setHovering(false)}
                            className={cn('relative px-4 py-2', tabClassName)}
                            style={{
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            {active.value === tab.value && (
                                <motion.div
                                    layoutId="clickedbutton"
                                    transition={{
                                        type: 'spring',
                                        bounce: 0.3,
                                        duration: 0.6,
                                    }}
                                    className={cn(
                                        'absolute inset-0 rounded-lg dark:bg-dodger-blue-700',
                                        activeTabClassName
                                    )}
                                />
                            )}

                            <span
                                className={`relative block text-[1.3rem] font-semibold uppercase tracking-wide ${active.value === tab.value ? 'dark:text-cod-gray-100' : 'dark:text-cod-gray-300'} `}
                            >
                                {tab.title}
                            </span>
                        </NavLink>
                    ) : (
                        <button
                            key={tab.title}
                            onClick={() => {
                                moveSelectedTabToTop(idx)
                            }}
                            onMouseEnter={() => setHovering(true)}
                            onMouseLeave={() => setHovering(false)}
                            className={cn(
                                'relative rounded-xl px-4 py-2',
                                tabClassName
                            )}
                            style={{
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            {active.value === tab.value && (
                                <motion.div
                                    layoutId="clickedbutton"
                                    transition={{
                                        type: 'spring',
                                        bounce: 0.3,
                                        duration: 0.6,
                                    }}
                                    className={cn(
                                        'absolute inset-0 rounded-xl dark:bg-dodger-blue-700',
                                        activeTabClassName
                                    )}
                                />
                            )}

                            <span
                                className={`relative block text-[1.3rem] font-semibold uppercase tracking-wide ${active.value === tab.value ? 'dark:text-cod-gray-100' : 'dark:text-cod-gray-300'} `}
                            >
                                {tab.title}
                            </span>
                        </button>
                    )
                })}
                {/* {children} */}
            </div>
            <FadeInDiv
                path={path}
                tabs={tabs}
                active={active}
                key={active.value}
                hovering={hovering}
                className={cn('', contentClassName)}
            />
        </>
    )
})

export const FadeInDiv = memo(function FadeInDiv({
    className,
    tabs,
    hovering,
    path,
}: {
    className?: string
    key?: string
    tabs: Tab[]
    active: Tab
    hovering?: boolean
    path: string
}) {
    const isActive = (tab: Tab) => {
        return tab.value === tabs[0].value
    }
    return (
        <div className="relative flex h-full w-full overflow-y-scroll">
            {tabs.map((tab, idx) => {
                return (
                    <motion.div
                        key={tab.value}
                        layoutId={tab.value}
                        style={{
                            scale: 1 - idx * 0.1,
                            top: hovering ? idx * -50 : 0,
                            zIndex: -idx,
                            // opacity: idx < 3 ? 1 - idx * 0.1 : 0,
                            height: 'calc(100%)',
                            opacity: isActive(tab) ? 1 : 0.05,
                        }}
                        animate={{
                            y: isActive(tab) ? [0, 40, 0] : 0,
                        }}
                        className={cn(
                            'absolute left-0 top-0 w-full',
                            className
                        )}
                    >
                        {path === tab.value ? (
                            path === '/gym' ? (
                                <GymOverallView></GymOverallView>
                            ) : (
                                <Outlet></Outlet>
                            )
                        ) : (
                            tab.dummyContent
                        )}
                    </motion.div>
                )
            })}
        </div>
    )
})

export { Tabs }
