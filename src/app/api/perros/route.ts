import { supabase } from "@/lib/supabase";
import { NextResponse } from "next/server";

export async function GET() {
  const { data: perros, error } = await supabase.from("animales").select("*").eq("tipo", "perro");

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(perros);
}
