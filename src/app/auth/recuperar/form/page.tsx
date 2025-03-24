'use client'
import { updatePassword } from '../../clientActions'
import { useActionState } from 'react'

export default function recoverPage() {
  const [recoverState, recoverAction] = useActionState(updatePassword, { error: '' })

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-rosa-gris p-8 rounded-lg shadow-lg w-1/4">
        <h2 className="text-center text-2xl font-bold text-negro mb-4">Reestablecer tu contraseña</h2>
        {recoverState.error && <p className="text-red-500 text-sm text-center">{recoverState.error}</p>}
        <form className="space-y-4">
          <div>
            <label className="block text-negro" htmlFor="password">Contraseña:</label>
            <input type="password" name="password" id="password" required className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div>
          <div>
            <label className="block text-negro" htmlFor="password2">Repetir contraseña:</label>
            <input type="password" name="password2" id="password2" required className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div>
          <button formAction={recoverAction} className="bg-verde-claro text-negro mx-auto block px-6 py-2 rounded-md font-bold hover:bg-green-500 transition">Actualizar</button>
        </form>
      </div>
    </div>
  );
}