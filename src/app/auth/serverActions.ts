'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(prevState: any, formData: FormData) {
  const supabase = await createClient()
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return { error: error.message }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(prevState: any, formData: FormData) {
  const formDataValues = Object.fromEntries(
    Array.from(formData.entries()).map(([key, value]) => [key, value as string])
  ) as Record<string, string>;  

  if (formDataValues.password !== formDataValues.password2) {
    return { error: "Las contraseñas no coinciden.", values: formDataValues };
  }

  const supabase = await createClient()
  const data = {
    email: formDataValues.email,
    password: formDataValues.password,
    options: {
      data: {
        first_name: formDataValues.firstName,
        last_name: formDataValues.lastName,
        dni: formDataValues.dni,
        fecha_nacimiento: formDataValues.fechaNacimiento,
        rol: formDataValues.rol,
      },
    },
  }
  const { error } = await supabase.auth.signUp(data)

  if (error) {
    return { error: error.message }
  }else{
    revalidatePath('/', 'layout')
    redirect('/auth/login')
  }
}

export async function updateUser(prevState: any, formData: FormData) {
  const supabase = await createClient()
  
  const { data, error } = await supabase.auth.updateUser({
    data: {
      first_name: formData.get('firstName') as string,
      last_name: formData.get('lastName') as string,
      dni: formData.get('dni') as string,
      fecha_nacimiento: formData.get('fechaNacimiento') as string,
    }
})

  if (error) {
    return { error: error.message }
  }else{
    return { error: 'Datos ACTUALIZADOS!' }
  }
}