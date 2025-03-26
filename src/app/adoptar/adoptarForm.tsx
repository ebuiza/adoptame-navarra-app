"use client";

import { useActionState } from "react";
import { getAnimales } from "./adoptarAction";
import Tarjeta from "./tarjeta";

export default function SearchPage({ rol, animales }: { rol: string; animales: any[] }) {
  const [searchState, searchAction] = useActionState(getAnimales, animales);
  const perros = searchState.filter((animal) => animal.tipo === "perro");
  const gatos = searchState.filter((animal) => animal.tipo === "gato");
  const otros = searchState.filter((animal) => animal.tipo === "otros");

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="bg-rosa-gris p-8 rounded-lg shadow-lg w-3/4 mt-6">
        <h2 className="text-center text-2xl font-bold text-negro mb-4">Adopta un animal</h2>
        <p className="block text-negro">Filtra tu mascota ideal:</p>
        <form className="flex items-center w-full space-x-4">
          <select name="tipo" className="border-2 border-fucsia-oscuro rounded-md flex-grow">
            <option value="">Especie</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="otros">Otros</option>
          </select>
          <select name="size" className="border-2 border-fucsia-oscuro rounded-md flex-grow">
            <option value="">Tamaño</option>
            <option value="pequeño">Pequeño</option>
            <option value="mediano">Mediano</option>
            <option value="grande">Grande</option>
          </select>
          <select name="edad" className="border-2 border-fucsia-oscuro rounded-md flex-grow">
            <option value="">Edad</option>
            <option value="cachorro">Cachorro</option>
            <option value="adulto">Adulto</option>
          </select>
          <select name="sexo" className="border-2 border-fucsia-oscuro rounded-md flex-grow">
            <option value="">Sexo</option>
            <option value="macho">Macho</option>
            <option value="hembra">Hembra</option>
          </select>
          <button formAction={searchAction} className="bg-verde-claro text-negro mx-auto px-2 py-1 rounded-md font-bold hover:bg-green-500 transition">
            Buscar
          </button>
        </form>
        <div className="w-3/4 mt-6">
            <h2 className="text-2xl text-center font-bold text-fucsia-oscuro">Perros para adoptar</h2>
              <div className="flex flex-wrap gap-4 justify-center">
              {perros.length > 0 ? (
                perros.map((animal) => (<Tarjeta key={animal.id} id={animal.id} nombre={animal.nombre} sexo={animal.sexo} imagen={animal.imagen} rol={rol} />))
              ) : (
                <p className="text-center text-negro">No hay perros disponibles con el filtro seleccionado.</p>
              )}
            </div>
        </div>
        <div className="w-3/4 mt-6">
            <h2 className="text-2xl text-center font-bold text-fucsia-oscuro">Gatos para adoptar</h2>
              <div className="flex flex-wrap gap-4 justify-center">
              {gatos.length > 0 ? (
                gatos.map((animal) => (<Tarjeta key={animal.id} id={animal.id} nombre={animal.nombre} sexo={animal.sexo} imagen={animal.imagen} rol={rol} />))
              ) : (
                <p className="text-center text-negro">No hay gatos disponibles con el filtro seleccionado.</p>
              )}
            </div>
        </div>
        <div className="w-3/4 mt-6">
            <h2 className="text-2xl text-center font-bold text-fucsia-oscuro">Otro tipo de mascotas</h2>
              <div className="flex flex-wrap gap-4 justify-center">
              {otros.length > 0 ? (
                otros.map((animal) => (<Tarjeta key={animal.id} id={animal.id} nombre={animal.nombre} sexo={animal.sexo} imagen={animal.imagen} rol={rol} />))
              ) : (
                <p className="text-center text-negro">No hay otro tipo de mascotas disponibles con el filtro seleccionado.</p>
              )}
            </div>
        </div>
      </div>
    </div>
  );
}
