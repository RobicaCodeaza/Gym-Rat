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
export function DotBackgroundDemo({ children }: PropsWithChildren) {
    return (
        <div className="bg-dot-white/[0.3] relative z-10 flex h-screen w-1/2 items-center justify-center bg-cod-gray-darker/80 backdrop-blur-sm">
            {/* Radial gradient for the container to give a faded look */}
            <div className="bg-black[mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none absolute inset-0 flex items-center justify-center"></div>
            {children}
        </div>
    )
}
