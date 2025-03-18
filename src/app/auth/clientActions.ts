"use client"
import { createClient } from '@/utils/supabase/client'

export async function sendPasswordEmail(prevState: any, formData: FormData) {
    const supabase = createClient()
  
    const { data, error } = await supabase.auth.resetPasswordForEmail(formData.get('email') as string)
  
    if (error) {
      return { error: error.message }
    }else{
        return { error: 'Email enviado!' }
    }
  }
  
  export async function updatePassword(prevState: any, formData: FormData) {
    if (formData.get('password') !== formData.get('password2')) {
      return { error: "Las contraseñas no coinciden." };
    }
    const supabase = createClient()
    
    const { data, error } = await supabase.auth.updateUser({
      password: formData.get('password') as string,
    })
  
    if (error) {
      return { error: error.message }
    }else{
      return { error: 'Contraseña ACTUALIZADA!' }
    }
  }