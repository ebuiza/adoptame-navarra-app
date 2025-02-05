"use client";
import { useState } from "react";
import React from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  interface SignUpResponse {
    error: {
      message: string;
    } | null;
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error }: SignUpResponse = await supabase.auth.signUp({
      email,
      password,
      options: { data: { role: "adoptante" } },
    });

    if (error) return setError(error.message);

    router.push("/auth/login");
  };

  return (
    <div>
      <h1>Registro</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
