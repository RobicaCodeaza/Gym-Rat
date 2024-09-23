import { useEffect, useState } from 'react'

const phone = '37.5em'
const tabPort = '56.25em'
const tabLand = '75em'
const particularSmallLaptop = '98.5em'
const laptop = '112.5em'
const bigDesktop = '120em'

function useMediaQueryResize({
    query,
    basicQuery = 'max-width',
}: {
    query: string
    basicQuery: string
}) {
    const queryResponsive = `(${basicQuery}:${query})`
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const mediaQueryList = window.matchMedia(queryResponsive)
        const handleResize = () => {
            setMatches(mediaQueryList.matches)
        }

        // Set initial value
        handleResize()

        // Add listener for changes
        mediaQueryList.addEventListener('change', handleResize)

        // Cleanup listener on unmount
        return () => {
            mediaQueryList.removeEventListener('change', handleResize)
        }
    }, [queryResponsive])

    return matches
}

export { phone, tabPort, tabLand, particularSmallLaptop, laptop, bigDesktop }

export default useMediaQueryResize
