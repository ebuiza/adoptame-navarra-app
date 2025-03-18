'use client'
import { signup } from '../serverActions'
import { useActionState } from 'react'

export default function registroPage() {
  const [registroState, registroAction] = useActionState(signup, { error: '', values: {}})

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-rosa-gris p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-2xl font-bold text-negro mb-4">Registrarse</h2>
        {registroState.error && <p className="text-red-500 text-sm text-center">{registroState.error}</p>}
        <form className="space-y-4">
          <div>
            <label className="block text-negro" htmlFor="firstName">Nombre:</label>
            <input type="text" name="firstName" id="firstName" defaultValue={registroState.values?.firstName || ''} required className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div>
          <div>
            <label className="block text-negro" htmlFor="lastName">Apellidos:</label>
            <input type="text" name="lastName" id="lastName" defaultValue={registroState.values?.lastName || ''} required className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div>
          <div>
            <label className="block text-negro" htmlFor="dni">DNI (12345678-A):</label>
            <input type="text" name="dni" id="dni" pattern="^\d{8}-[A-Z]$" defaultValue={registroState.values?.dni || ''} required className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div> 
          <div>
            <label className="block text-negro" htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" defaultValue={registroState.values?.email || ''} required className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div>
          <div>
            <label className="block text-negro" htmlFor="password">Contraseña:</label>
            <input type="password" name="password" id="password" required className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div>
          <div>
            <label className="block text-negro" htmlFor="password2">Repetir contraseña:</label>
            <input type="password" name="password2" id="password2" required className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div>
          <div>
            <label className="block text-negro" htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
            <input type="date" name="fechaNacimiento" id="fechaNacimiento" defaultValue={registroState.values?.fechaNacimiento || ''} required className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div>
          <div>
            <select id="rol" name="rol" required className="w-full border-2 border-fucsia-oscuro rounded-md p-2">
              <option value="">Selecciona un rol</option>
              <option value="adoptante">Adoptante</option>
              <option value="entidad">Entidad</option>
            </select>
          </div>
          <div>
            <input type="checkbox" name="privacidad" id="privacidad" required className="border-2 border-fucsia-oscuro rounded-md p-2"/>
            <label className="text-negro" htmlFor="privacidad">Acepto los <a href="/privacidad" className="text-fucsia-oscuro text-sm hover:underline">términos y condiciones</a></label>
          </div>
          <button formAction={registroAction} className="bg-verde-claro text-negro mx-auto block px-6 py-2 rounded-md font-bold hover:bg-green-500 transition">Registrarse</button>
          <div className="text-right">
            <a href="/auth/login" className="text-fucsia-oscuro text-sm hover:underline">¿Ya tienes una cuenta?</a>
          </div>
        </form>
      </div>
    </div>
  );
}