'use client'

import { useActionState } from "react";
import { setAnimal } from "../adoptar/adoptarAction";

export default function altaAnimal() {
  const [setAnimalState, setAnimalAction] = useActionState(setAnimal, undefined)
  
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-rosa-gris p-8 rounded-lg shadow-lg w-1/2 mx-auto">
        <h2 className="text-center text-2xl font-bold text-negro mb-4">Registra una mascota</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-negro" htmlFor="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre" required className="w-full border-2 border-fucsia-oscuro rounded-md p-2"/>
          </div>
          <select name="tipo" required className="w-full border-2 border-fucsia-oscuro rounded-md flex-grow">
            <option value="">Especie</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="otros">Otros</option>
          </select>
          <select name="size" required className="w-full border-2 border-fucsia-oscuro rounded-md flex-grow">
            <option value="">Tamaño</option>
            <option value="pequeño">Pequeño</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
          </select>
          <select name="edad" required className="w-full border-2 border-fucsia-oscuro rounded-md flex-grow">
            <option value="">Edad</option>
            <option value="cachorro">Cachorro</option>
            <option value="adulto">Adulto</option>
          </select>
          <select name="sexo" required className="w-full border-2 border-fucsia-oscuro rounded-md flex-grow">
            <option value="">Sexo</option>
            <option value="macho">Macho</option>
            <option value="hembra">Hembra</option>
          </select>
          <button formAction={setAnimalAction} className="bg-verde-claro text-negro mx-auto px-2 py-1 rounded-md font-bold hover:bg-green-500 transition">
            Dar de alta
          </button>
        </form>
      </div>
    </div>
  );
}
