import { adoptarAnimal, deleteAnimal } from "./adoptarAction";

export default function Tarjeta({ id, nombre, sexo, imagen, rol }: { id: string; nombre: string; sexo: string; imagen: string; rol: string }) {
    return (
      <div className="border border-gray-300 bg-rosa-claro rounded-lg p-4 w-full max-w-xs mx-auto">
  <img src={`/animales/${nombre}.png`} alt={nombre} className="w-full h-40 object-cover rounded-lg" />
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold mt-2">{nombre} {sexo === "macho" ? "♂" : "♀"}</h3>
          <form >
            <input type="hidden" name="id" id="id" value={id} />
            {rol === "entidad" ? (<button formAction={deleteAnimal} className="bg-fucsia-oscuro text-white px-4 py-2 mt-2 rounded">Eliminar</button>) 
            : rol === "adoptante" ? (<button formAction={adoptarAnimal} className="bg-verde-claro text-negro px-4 py-2 mt-2 rounded">Adóptame</button>
            ) : (<button className="bg-gray-400 text-white px-4 py-2 mt-2 rounded" disabled>Registrate</button>
            )}
          </form>
        </div>
      </div>
    );
  }
  