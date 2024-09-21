import { Outlet } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'
import Container from './Container'

import { DotBackgroundDemo } from './DotBackground'

import FloatingNav from './FloatingNav'

/**
 * A component that renders the main application layout.
 *
 * The layout is a grid with one column on mobile and two columns on tablet and
 * larger. The first row contains the sidebar and header, and the second row
 * contains the main content area.
 *
 * @returns A JSX element representing the main application layout.
 */
function AppLayout() {
    return (
        <div className="h-screen w-screen bg-cod-gray-950">
            <DotBackgroundDemo type="full">
                <div className="flex h-full w-full flex-col">
                    <Header></Header>
                    <FloatingNav></FloatingNav>
                </div>
            </DotBackgroundDemo>
        </div>
    )
}

export default AppLayout
