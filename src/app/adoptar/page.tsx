"use client";
import { useAdoptar } from "@/app/store/adoptar";

export default function Adoptar() {
  const { items, removeFromAdoptar } = useAdoptar();

  return (
    <div>
      <h1>Adopciones</h1>
      {items.length === 0 ? (
        <p>Aún no has seleccionado a ningún perro para adoptar.</p>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <h3>{item.nombre}</h3>
            <p>Edad: {item.edad} años</p>
            <button onClick={() => removeFromAdoptar(item.id)}>Cancelar adopción</button>
          </div>
        ))
      )}
    </div>
  );
}
