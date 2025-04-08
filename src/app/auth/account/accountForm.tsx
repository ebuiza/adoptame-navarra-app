'use client'
import { updateUser } from '../serverActions'
import { useActionState } from 'react'
import { type User } from '@supabase/supabase-js'

export default function accountPage({ user }: { user: User }) {
  const [updateState, updateAction] = useActionState(updateUser, { error: '' })

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-rosa-gris space-y-4 p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-negro mb-4">Cuenta</h2>
        {updateState.error && <p className="text-red-500 text-sm text-center">{updateState.error}</p>}
        <form className="space-y-4">
          <div>
            <label className="block text-negro" htmlFor="firstName">Nombre:</label>
            <input type="text" name="firstName" id="firstName" required defaultValue={user.user_metadata.first_name} className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div>
          <div>
            <label className="block text-negro" htmlFor="lastName">Apellidos:</label>
            <input type="text" name="lastName" id="lastName" required defaultValue={user.user_metadata.last_name} className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div>
          <div>
            <label className="block text-negro" htmlFor="dni">DNI (12345678-A):</label>
            <input type="text" name="dni" id="dni" pattern="^\-?\d{10}$" required defaultValue={user.user_metadata.dni} className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div>
          <div>
            <label className="block text-negro" htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" disabled defaultValue={user.email} className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div>
          <div>
            <label className="block text-negro" htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
            <input type="date" name="fechaNacimiento" id="fechaNacimiento"  defaultValue={user.user_metadata.fecha_nacimiento} className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div>
          <div>
            <label className="block text-negro" htmlFor="rol">Rol:</label>
            <input type="text" name="rol" id="rol" defaultValue={user.user_metadata.rol} disabled />
          </div> 
          <button formAction={updateAction} className="bg-verde-claro text-negro mx-auto block px-6 py-2 rounded-md font-bold hover:bg-green-500 transition">Actualizar</button>
           </form>
        <div>
          <form action="/auth/signout" method="post" className="space-y-4">
            <button type="submit" className="bg-fucsia-oscuro text-negro mx-auto block px-6 py-2 rounded-md font-bold hover:bg-red-500 transition">Salir</button>
          </form>
        </div>
      </div>
    </div>
  );
}