"use client";
import { useState, useEffect } from "react";
import { useAdoptar } from "@/app/store/adoptar";

interface Perro {
  id: number;
  nombre: string;
  edad: number;
  raza: string;
}

export default function Perros() {
  const [perros, setPerros] = useState<Perro[]>([]);
  const { addToAdoptar } = useAdoptar();

  useEffect(() => {
    fetch("/api/perros")
      .then((res) => res.json())
      .then(setPerros);
  }, []);

  return (
    <div>
      <h1>Perros en adopción</h1>
      {perros.map((p) => (
        <div key={p.id}>
          <h3>{p.nombre}</h3>
          <p>Edad: {p.edad} años</p>
          <p>Raza: {p.raza}</p>
          <button onClick={() => addToAdoptar(p)}>Adoptar</button>
        </div>
      ))}
    </div>
  );
}
