import { redirect } from "next/navigation";
import { createClient } from '@/utils/supabase/server';
import AccountForm from './accountForm';

export default async function getUserSession() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (data.user) {
    return <AccountForm user={data.user} />;
  } else {
    redirect("/auth/login");
  }
}
