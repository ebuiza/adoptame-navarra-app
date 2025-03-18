import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();
  const { data: perros, error } = await supabase.from("animales").select("*").eq("tipo", "perro");

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json(perros);
}
