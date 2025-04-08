'use client'

export default function contacto() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-rosa-gris p-8 rounded-lg shadow-lg w-full max-w-2xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-negro mb-4">¡Contáctanos!</h2>
        <form action="https://formsubmit.co/ebuiza@outlook.es" method="POST" className="space-y-4">
          <div>
            <label className="block text-negro" htmlFor="name">Nombre completo:</label>
            <input type="text" name="name" id="name" required className="w-full border-2 border-fucsia-oscuro rounded-md p-3"/>
          </div>
          <div>
            <label className="block text-negro" htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" required className="w-full border-2 border-fucsia-oscuro rounded-md p-3"/>
          </div>
          <div>
            <label className="block text-negro" htmlFor="message">Asunto:</label>
            <textarea name="message" id="message" rows={10} required className="w-full border-2 border-fucsia-oscuro rounded-md p-3"/>
          </div>
          <button type="submit" className="bg-verde-claro text-negro mx-auto block px-6 py-2 rounded-md font-bold hover:bg-green-500 transition">Enviar</button>
        </form>
      </div>
    </div>
  );
}