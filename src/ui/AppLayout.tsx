import { Outlet } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import Sidebar from './Sidebar'
import Container from './Container'

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
        <div className="tab-port:grid-cols-[20rem_1fr] tab-land:grid-cols-[20rem_1fr] grid h-screen grid-cols-[1fr] grid-rows-[auto_1fr]">
            <Sidebar></Sidebar>
            <Header></Header>
            <Main>
                <Container>
                    <Outlet></Outlet>
                </Container>
            </Main>
        </div>
    )
}

export default AppLayout
