import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import LoginForm from "./loginForm";

export default async function LoginPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect("/auth/account"); // Redirige si el usuario ya está autenticado
  }

  return <LoginForm />;
}