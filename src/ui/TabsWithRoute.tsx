import { type ReactNode } from 'react'
import { Tab, Tabs } from '../components/aceternity/tabs'

type TabsWithRouteProps = {
    withRoute: 'yes' | 'no'
    tabs: Tab[]
    children: ReactNode
}

/**
 * A variant of the Tabs component that renders the tabs as
 * NavLink s instead of plain button s.
 *
 * @returns {JSX.Element} The Tabs component with NavLink s.
 */
function TabsWithRoute({ withRoute, tabs, children }: TabsWithRouteProps) {
    return (
        <div className="relative mx-auto flex h-full w-full flex-1 flex-col items-start justify-start [perspective:1000px]">
            <Tabs withRoute={withRoute} tabs={tabs}>
                {children}
            </Tabs>
        </div>
    )
}

export default TabsWithRoute
