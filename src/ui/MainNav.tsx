import { GoHome } from 'react-icons/go'
import {
    PiCardsThreeLight,
    PiUserCircleGearLight,
    PiBookLight,
    PiNoteThin,
} from 'react-icons/pi'

import { CiSettings } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'
// import { useMobileNav } from '@/context/ToggleMobileNav'

function MainNav() {
    // const { toggleMobileNav, openMenu } = useMobileNav()

    // function handleToggle() {
    //     if (openMenu) toggleMobileNav()
    //     else return
    // }

    return (
        <ul className="flex flex-col gap-3">
            <li>
                <NavLink
                    // onClick={handleToggle}
                    to={'dashboard'}
                    className="justify-left text-mako-grey-700 hover:bg-picton-blue-100 hover:text-mako-grey-900 flex items-center gap-5 rounded px-10 py-4 text-[1.6rem] font-medium transition-[all] duration-300 ease-in-out"
                >
                    <GoHome className="block h-10 w-10 text-inherit"></GoHome>
                    <span className="tab-port:block">Home</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    // onClick={handleToggle}
                    to={'decks'}
                    className="justify-left text-mako-grey-700 hover:bg-picton-blue-100 hover:text-mako-grey-900 flex items-center gap-5 rounded px-10 py-4 text-[1.6rem] font-medium transition-[all] duration-300 ease-in-out"
                >
                    <PiBookLight className="block h-10 w-10 text-inherit"></PiBookLight>
                    <span className="tab-port:block">Decks</span>
                </NavLink>
            </li>

            <li>
                <NavLink
                    // onClick={handleToggle}
                    to={'flashcards'}
                    className="justify-left text-mako-grey-700 hover:bg-picton-blue-100 hover:text-mako-grey-900 flex items-center gap-5 rounded px-10 py-4 text-[1.6rem] font-medium transition-[all] duration-300 ease-in-out"
                >
                    <PiCardsThreeLight className="block h-10 w-10 text-inherit"></PiCardsThreeLight>
                    <span className="tab-port:block">Cards</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    // onClick={handleToggle}
                    to={'quiz'}
                    className="justify-left text-mako-grey-700 hover:bg-picton-blue-100 hover:text-mako-grey-900 flex items-center gap-5 rounded px-10 py-4 text-[1.6rem] font-medium transition-[all] duration-300 ease-in-out"
                >
                    <PiNoteThin className="block h-10 w-10 text-inherit"></PiNoteThin>
                    <span className="tab-port:block">Quiz</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    // onClick={handleToggle}
                    to={'account'}
                    className="justify-left text-mako-grey-700 hover:bg-picton-blue-100 hover:text-mako-grey-900 flex items-center gap-5 rounded px-10 py-4 text-[1.6rem] font-medium transition-[all] duration-300 ease-in-out"
                >
                    <PiUserCircleGearLight className="block h-10 w-10 text-inherit"></PiUserCircleGearLight>
                    <span className="tab-port:block">Account</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    // onClick={handleToggle}
                    to={'settings'}
                    className="justify-left text-mako-grey-700 hover:bg-picton-blue-100 hover:text-mako-grey-900 flex items-center gap-5 rounded px-10 py-4 text-[1.6rem] font-medium transition-[all] duration-300 ease-in-out"
                >
                    <CiSettings className="block h-10 w-10 text-inherit"></CiSettings>
                    <span className="tab-port:block">Settings</span>
                </NavLink>
            </li>
        </ul>
    )
}

export default MainNav
