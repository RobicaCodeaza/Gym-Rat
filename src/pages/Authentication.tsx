import GeneralOverview from '../features/authentication/GeneralOverview'
import AuthenticationContainer from '../features/authentication/LoginContainer'
import { MovingGradient } from '../ui/MovingGradient'

function Authentication() {
    return (
        <div className="flex h-screen bg-cod-gray-950">
            <MovingGradient>
                <div className="z-10 flex">
                    <AuthenticationContainer></AuthenticationContainer>
                    <GeneralOverview></GeneralOverview>
                </div>
            </MovingGradient>
        </div>
    )
}

export default Authentication
