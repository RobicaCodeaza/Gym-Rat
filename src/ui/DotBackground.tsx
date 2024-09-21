import { PropsWithChildren } from 'react'

/**
 * A demo component for showcasing the dot backgrounds.
 *
 * This component will render a large, full-width container with a radial gradient
 * that fades from white to black. Inside the container, there is a paragraph of
 * text that has a gradient background that matches the container's background.
 * The text is then set to be transparent, giving the illusion that the text is
 * "cutting out" the background.
 */
export function DotBackgroundDemo({
    children,
    type = 'half',
}: PropsWithChildren & { type: 'full' | 'half' }) {
    return (
        <div
            className={`relative z-10 flex h-screen w-full items-center justify-center bg-cod-gray-950/70 backdrop-blur-sm bg-dot-white/[0.3] phone:${type === 'half' ? 'w-1/2' : 'w-full'}`}
        >
            {/* Radial gradient for the container to give a faded look */}
            <div className="bg-black[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none absolute inset-0 flex items-center justify-center"></div>
            {children}
        </div>
    )
}
