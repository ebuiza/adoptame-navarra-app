'use client'
import { login } from '../serverActions'
import { sendPasswordEmail } from '../clientActions'
import { useActionState } from 'react'

export default function LoginPage() {
  const [loginState, loginAction] = useActionState(login, { error: '' })
  const [recoverState, recoverAction] = useActionState(sendPasswordEmail, { error: '' })

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-rosa-gris p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-center text-2xl font-bold text-negro mb-4">Inicio de sesión</h2>
        {loginState?.error && <p className="text-red-500 text-sm text-center">{loginState.error}</p>}
        {recoverState?.error && <p className="text-red-500 text-sm text-center">{recoverState.error}</p>}
        <form className="space-y-4">
          <div>
            <label className="block text-negro" htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div>
          <div>
            <label className="block text-negro" htmlFor="password">Contraseña:</label>
            <input type="password" name="password" id="password" className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div>
          <div className="text-right">
          <button formAction={recoverAction} className="bg-rosa-gris text-fucsia-oscuro text-sm">¿Olvidaste tu contraseña?</button>
          </div>
          <button formAction={loginAction} className="bg-verde-claro text-negro mx-auto block px-6 py-2 rounded-md font-bold hover:bg-green-500 transition">Iniciar Sesión</button>
          <p className="text-center text-negro text-sm">
            ¿No tienes una cuenta?{" "}
            <a href="/auth/registro" className="text-fucsia-oscuro text-sm">Crear cuenta</a>
          </p>
        </form>
      </div>
    </div>
  );
}