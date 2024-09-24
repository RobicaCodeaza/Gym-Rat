'use client'
import { motion } from 'framer-motion'
import {
    HeroHighlight as HeroHighlightAceternity,
    Highlight,
} from '../components/aceternity/hero-highlight'
import { PropsWithChildren } from 'react'

export function HeroHighlight({ children }: PropsWithChildren) {
    return (
        <HeroHighlightAceternity>
            {/* <motion.h1
                initial={{
                    opacity: 0,
                    y: 20,
                }}
                animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                }}
                transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                }}
                className="mx-auto max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-neutral-700 md:text-4xl lg:text-5xl lg:leading-snug dark:text-cod-gray-100"
            >
                With insomnia, nothing&apos;s real. Everything is far away.
                Everything is a{' '}
                <Highlight className="text-black dark:text-white">
                    copy, of a copy, of a copy.
                </Highlight>
            </motion.h1> */}
            {children}
        </HeroHighlightAceternity>
    )
}
