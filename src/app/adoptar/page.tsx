import { createClient } from "@/utils/supabase/server";
import SearchForm from "./adoptarForm";
import { getAnimales } from "./adoptarAction";

export default async function AdoptarPage({ searchParams }: { searchParams: { tipo?: string } }) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  const formData = new FormData();
  if (searchParams.tipo) {
    formData.append("tipo", searchParams.tipo);
  }
  const animales = await getAnimales(null, formData);

  if (data.user) {
    if(data.user.user_metadata.rol === 'adoptante'){
        return <SearchForm rol='adoptante' animales={animales} />;
    }else if(data.user.user_metadata.rol === 'entidad'){
        return <SearchForm rol='entidad' animales={animales}/>;
    }else if(data.user.user_metadata.rol === 'admin'){
        return <SearchForm rol='admin' animales={animales}/>;
    }
  }else{
    return <SearchForm rol='guest' animales={animales}/>;
  }
}