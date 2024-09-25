import supabase from './supabase'

export async function getCurrentUser() {
    console.log('getCurrentUser')
    const { data: session } = await supabase.auth.getSession()

    if (!session.session) return null

    const { data: userData, error: errorGettingUser } =
        await supabase.auth.getUser()

    console.log(userData.user)
    if (errorGettingUser) throw new Error(errorGettingUser.message)

    return userData?.user
}

export async function login(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })

    if (error) {
        throw new Error(error.message)
    }
    return data.user
}

export async function signup(
    firstname: string,
    lastname: string,
    email: string,
    password: string
) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                firstname: firstname,
                lastname: lastname,
            },
        },
    })
    if (error) {
        throw new Error(error.message)
    }
    return data
}

export async function logout() {
    const { error } = await supabase.auth.signOut()

    if (error) throw new Error(error.message)
}
