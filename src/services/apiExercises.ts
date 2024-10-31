import supabase from '@/services/supabase'
import { type Tables } from '@/types/database.types'
import { getCurrentUser } from './apiAuth'

export async function createEditExercise(
    newWorkout: Omit<Tables<'Exercises'>, 'id'>,
    id: number | null
) {
    const user = await getCurrentUser()
    if (!user) {
        throw new Error('User not found')
    }

    let query

    if (!id) {
        const { data: existingData, error } = await supabase
            .from('Workout')
            .select('*')
            .eq('user_id', user.user_metadata.user_id)
            .eq('name', newWorkout.name)

        if (error) {
            throw new Error(error.message)
        }

        // Check if data already exists
        if (existingData && existingData.length > 0) {
            throw new Error('Workout with the same name already exists.')
        }

        query = supabase.from('Workout').insert([newWorkout])
    } else query = supabase.from('Workout').update(newWorkout).eq('id', id)

    const { data, error } = await query.select().single()

    if (error) {
        throw new Error('Workout could not be created.')
    }

    return data
}

export async function deleteWorkout(id: number) {
    const { error } = await supabase.from('Workout').delete().eq('id', id)

    if (error) throw new Error('Could not delete the workout.')
}

export async function deleteAllWorkouts() {
    const user = await getCurrentUser()

    if (!user) throw new Error('User not found')

    const { error } = await supabase
        .from('Workout')
        .delete()
        .eq('user_id', user.user_metadata.user_id)

    if (error) throw new Error(error.message)
}
