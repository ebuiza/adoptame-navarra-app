export default function Layout({ children }) {
  return (
    <html lang="es">
      <body>
        <nav>
          <a href="/">Inicio</a>
          <a href="/perros">Perros</a>
          <a href="/categorias">Categorías</a>
          <a href="/adoptar">Adoptar</a>
        </nav>
        {children}
      </body>
    </html>
  );
}