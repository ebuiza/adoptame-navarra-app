import { NextResponse } from "next/server";

const perros = [
  { id: 1, nombre: "Luna", edad: 2, categoria: "Pequeño" },
  { id: 2, nombre: "Max", edad: 4, categoria: "Mediano" },
];

export async function GET() {
  return NextResponse.json(perros);
}
