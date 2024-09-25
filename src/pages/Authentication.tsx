import { useEffect } from 'react'
import GeneralOverview from '../features/authentication/GeneralOverview'
import AuthenticationContainer from '../features/authentication/AuthenticationContainer'
import { useUser } from '../features/authentication/useUser'
import { MovingGradient } from '../ui/MovingGradient'
import { useNavigate } from 'react-router-dom'

function Authentication() {
    const { isLoading, isAuthenticated } = useUser()
    const navigate = useNavigate()

    useEffect(
        function () {
            if (isAuthenticated && !isLoading)
                navigate('/dashboard', { replace: true })
        },
        [isAuthenticated, isLoading, navigate]
    )

    return (
        <div className="flex h-screen w-screen bg-cod-gray-950">
            <MovingGradient>
                <div className="z-10 flex w-full">
                    <AuthenticationContainer></AuthenticationContainer>
                    <GeneralOverview></GeneralOverview>
                </div>
            </MovingGradient>
        </div>
    )
}

export default Authentication
