import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Main from './Main'

import Container from './Container'

import FloatingNav from './FloatingNav'

import { HeroHighlight } from './HeroHighlight'

import TabsWithRoute from './TabsWithRoute'
import { ReactElement, useEffect, useState } from 'react'
import Gym from '../pages/Gym'

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
            {/* <DotBackgroundDemo type="full"> */}
            <HeroHighlight>
                <div className="flex h-full w-full flex-col">
                    <Header></Header>
                    <Main>
                        <Container>
                            {/* <TabsWithRoute withRoute="yes" tabs={tabs}>
                                <div>Tab</div>
                            </TabsWithRoute> */}

                            <Outlet></Outlet>
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
