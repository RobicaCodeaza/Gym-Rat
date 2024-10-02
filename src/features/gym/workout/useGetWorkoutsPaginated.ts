import supabase from "../../../services/supabase"
import { Tables } from "../../../types/database.types"

export async function createEditCard(
  newWorkout: Tables<'Workout'>,
  id: number | null
) {
  let query

  if (!id) {
      const { data: existingData, error } = await supabase
          .from('Workout')
          .select('*')
          .eq('user_id', newWorkout.user_id)
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

export async function deleteCard(id: number) {
  const { error } = await supabase.from('Workout').delete().eq('id', id)

  if (error) throw new Error('Could not delete the workout.')
}

export async function deleteAllCards(userId: string) {
  const { error } = await supabase.from('Workout').delete().eq('user_id', userId)

  if (error) throw new Error(error.message)
}