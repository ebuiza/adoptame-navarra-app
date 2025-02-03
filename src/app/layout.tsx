import Link from "next/link";

export default function Layout({ children }) {
  return (
    <html lang="es">
      <body>
        <nav>
          <Link href="/">Inicio</Link>
          <Link href="/perros">Perros</Link>
          <Link href="/adoptar">Adoptar</Link>
          <Link href="/auth/login">Login</Link>
          <Link href="/auth/register">Registro</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}