"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function getAnimales(prevState: any, formData: FormData) {
  const supabase = await createClient();
  let query = supabase.from("animales").select("*").eq("adoptado", false);

  const tipo = formData?.get("tipo") as string;
  const size = formData?.get("size") as string;
  const edad = formData?.get("edad") as string;
  const sexo = formData?.get("sexo") as string;

  if (tipo) {
    query = query.eq("tipo", tipo);
  }
  if (size) {
    query = query.eq("size", size);
  }
  if (edad) {
    query = query.eq("edad", edad);
  }
  if (sexo) {
    query = query.eq("sexo", sexo);
  }

  const { data, error } = await query;
  if (error){
    throw new Error(error.message);
  }else{
    return data;
  }
}

export async function deleteAnimal(formData: FormData) {
  const supabase = await createClient();
  
  const id =  Number(formData.get("id"));
  let query = supabase.from("animales").delete().eq("id", id);

  const { error } = await query;

  revalidatePath("/");
}

export async function adoptarAnimal(formData: FormData) {
  const supabase = await createClient();

  const id =  Number(formData.get("id"));

  let query = supabase.from("animales").update({"adoptado" : true}).eq("id", id).select("*");

  const { data, error } = await query; 

  revalidatePath("/");
}

export async function setAnimal(formData: FormData) {
  const supabase = await createClient();
  if(formData){
    let query = supabase.from("animales").insert({ 
      nombre : formData?.get("nombre") as string, 
      tipo : formData?.get("tipo") as string,
      size : formData?.get("size") as string,
      edad : formData?.get("edad") as string,
      sexo : formData?.get("sexo") as string,
      adoptado : false,
    });
    
    const { error } = await query;
  }
  revalidatePath("/");
}
