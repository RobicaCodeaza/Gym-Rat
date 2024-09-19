import LoginContainer from '../features/authentication/LoginContainer'
import { MovingGradient } from '../ui/MovingGradient'

function Authentication() {
    return (
        <div className="flex h-screen bg-cod-gray-950">
            <MovingGradient>
                <div className="z-10 flex">
                    <LoginContainer></LoginContainer>
                    <div className="z-10 w-1/2 bg-cod-gray-950/80 backdrop-blur-sm"></div>
                </div>
            </MovingGradient>
        </div>
    )
}

export default Authentication
