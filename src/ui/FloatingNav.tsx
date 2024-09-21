import { FloatingDock } from '../components/aceternity/floating-dock'
import { GiGymBag, GiProgression } from 'react-icons/gi'
import {
    RiDashboardHorizontalLine,
    RiSettingsLine,
    RiCalendarLine,
} from 'react-icons/ri'

import ButtonIcon from './ButtonIcon'

function FloatingNav() {
    const items = [
        {
            title: 'Dashboard',
            icon: (
                <ButtonIcon otherClasses="w-8 h-8 phone:w-10 phone:h-10 tab-port:w-12 tab-port:h-12">
                    <RiDashboardHorizontalLine></RiDashboardHorizontalLine>
                </ButtonIcon>
            ),
            href: 'dashboard',
        },
        {
            title: 'Workout',
            icon: (
                <ButtonIcon otherClasses="w-8 h-8 phone:w-10 phone:h-10 tab-port:w-12 tab-port:h-12">
                    <GiGymBag></GiGymBag>
                </ButtonIcon>
            ),
            href: 'gym',
        },
        {
            title: 'Tracking',
            icon: (
                <ButtonIcon otherClasses="w-8 h-8 phone:w-10 phone:h-10 tab-port:w-12 tab-port:h-12">
                    <GiProgression></GiProgression>
                </ButtonIcon>
            ),
            href: 'tracking',
        },
        {
            title: 'Calendar',
            icon: (
                <ButtonIcon otherClasses="w-8 h-8 phone:w-10 phone:h-10 tab-port:w-12 tab-port:h-12">
                    <RiCalendarLine></RiCalendarLine>
                </ButtonIcon>
            ),
            href: 'calendar',
        },
        {
            title: 'Settings',
            icon: (
                <ButtonIcon otherClasses="w-8 h-8 phone:w-10 phone:h-10 tab-port:w-12 tab-port:h-12">
                    <RiSettingsLine></RiSettingsLine>
                </ButtonIcon>
            ),
            href: 'settings',
        },
    ]

    return (
        <div className="z-2 fixed bottom-5 left-1/2 -translate-x-1/2 tab-land:bottom-10">
            <FloatingDock items={items}></FloatingDock>
        </div>
    )
}

export default FloatingNav
