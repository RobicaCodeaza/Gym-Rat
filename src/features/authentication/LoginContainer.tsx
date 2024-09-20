import { useState } from 'react'
import { DotBackgroundDemo } from '../../ui/DotBackground'
import { SignUpForm } from './SignUpForm'
import { LoginForm } from './LoginForm'

function AuthenticationContainer() {
    const [hasAccount, setHasAccount] = useState<boolean>(true)
    return (
        <DotBackgroundDemo>
            {hasAccount ? (
                <LoginForm toggleForm={setHasAccount}></LoginForm>
            ) : (
                <SignUpForm toggleForm={setHasAccount}></SignUpForm>
            )}
        </DotBackgroundDemo>
    )
}

export default AuthenticationContainer
