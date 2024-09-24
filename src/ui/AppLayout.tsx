import { Outlet } from 'react-router-dom'
import Header from './Header'
import Main from './Main'

import Container from './Container'

import FloatingNav from './FloatingNav'

import { HeroHighlight } from './HeroHighlight'

import TabsWithRoute from './TabsWithRoute'

/**
 * A component that renders the main application layout.
 *
 * The layout is a grid with one column on mobile and two columns on tablet and
 * larger. The first row contains the sidebar and header, and the second row
 * contains the main content area.
 *
 * @returns A JSX element representing the main application layout.
 */

const tabs = [
    {
        title: 'General',
        value: 'product',
        to: '/gym',
        content: (
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-yellow-700 to-lima-900 p-10 text-xl font-bold text-white md:text-4xl">
                <p>General</p>
                {/* <DummyContent /> */}
            </div>
        ),
    },
    {
        title: 'Workout',
        value: 'workout',
        to: '/gym/workout',
        content: (
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
                <p>Workout</p>
                {/* <DummyContent /> */}
            </div>
        ),
    },
    {
        title: 'Exercises',
        value: 'exercises',
        to: '/gym/exercises',
        content: (
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
                <p>Exercises</p>
                {/* <DummyContent /> */}
            </div>
        ),
    },
    {
        title: 'Equipment',
        value: 'equipment',
        to: '/gym/equipment',
        content: (
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-700 to-violet-900 p-10 text-xl font-bold text-white md:text-4xl">
                <p>Equipment</p>
                {/* <DummyContent /> */}
            </div>
        ),
    },
]

function AppLayout() {
    return (
        <div className="h-screen w-screen bg-cod-gray-950">
            {/* <DotBackgroundDemo type="full"> */}
            <HeroHighlight>
                <div className="flex h-full w-full flex-col">
                    <Header></Header>
                    <Main>
                        <Container>
                            <Outlet></Outlet>
                            {/* <TabsWithRoute withRoute="yes" tabs={tabs}>
                                <div>Tab</div>
                            </TabsWithRoute> */}
                        </Container>
                    </Main>
                    <FloatingNav></FloatingNav>
                </div>
            </HeroHighlight>
            {/* </DotBackgroundDemo> */}
        </div>
    )
}

export default AppLayout
