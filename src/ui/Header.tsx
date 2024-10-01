// import HeaderMenu from './HeaderMenu'
// import ToggleMenu from './ToggleMenu'
// import UserAvatar from '../features/authentication/UserAvatar'

import UserAvatar from '../features/authentication/UserAvatar'
import { useUser } from '../features/authentication/useUser'
import Logo from './Logo'

function Header() {
    const { user } = useUser()

    return (
        <div className="tab-land z-10 mt-4 flex items-center gap-4 self-center rounded-full border border-cod-gray-400 bg-cod-gray-darker px-6 py-2 shadow-lg shadow-cod-gray-100/15 phone:mt-6 phone:w-3/5 phone:px-8 phone:py-3 tab-port:gap-8 tab-land:mt-8 tab-land:w-1/2 tab-land:px-10 tab-land:py-4 particular-small-laptop:w-1/3">
            <div className="rounded-full bg-yellow-500">
                <Logo height="medium"></Logo>
            </div>
            <div className="ml-auto text-lg font-medium text-cod-gray-100 tab-land:text-lg">
                Welcome back,{' '}
                <span className="font-bold text-yellow-500">
                    {user?.user_metadata.fullName ?? 'Default Name'}
                </span>{' '}
                !
            </div>
            <UserAvatar
                fullName={user?.user_metadata.fullName || 'Default Name'}
                avatar={user?.user_metadata.avatar}
            ></UserAvatar>
            {/* <HeaderMenu></HeaderMenu> */}
            {/* <ToggleMenu></ToggleMenu> */}
        </div>
    )
}

export default Header
