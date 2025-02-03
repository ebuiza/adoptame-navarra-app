import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

let usuarios = [];
export async function POST(req) {
  const { email, password } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);
  usuarios.push({ email, password: hashedPassword });
  return NextResponse.json({ message: "Usuario registrado" });
}