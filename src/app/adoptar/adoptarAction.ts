"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getAnimales(prevState: any, formData: FormData) {
  const supabase = await createClient();
  let query = supabase.from("animales").select("*").is("adoptado", null);

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

  revalidatePath("/adoptar");
  redirect("/adoptar");
}

export async function adoptarAnimal(formData: FormData) {
  const supabase = await createClient();
  const { data : userData } = await supabase.auth.getUser();

  const id =  Number(formData.get("id"));

  if (!userData.user) {
    redirect("/auth/login");
  }else{

    let query = supabase.from("animales").update({"adoptado" : userData.user.email}).eq("id", id).select("*");

    const { data, error } = await query; 
  
    revalidatePath("/");
  }
}

export async function setAnimal(prevState: any, formData: FormData) {
  const supabase = await createClient();
  if(formData){
    let query = supabase.from("animales").insert({ 
      nombre : formData?.get("nombre") as string, 
      tipo : formData?.get("tipo") as string,
      size : formData?.get("size") as string,
      edad : formData?.get("edad") as string,
      sexo : formData?.get("sexo") as string,
      adoptado : null
    });
    
    const { error } = await query;
    if (error) {
      console.log(error.message);
    } else {
      revalidatePath("/adoptar");
      redirect("/adoptar");
    }
  }
}
