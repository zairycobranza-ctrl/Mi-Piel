// app/not-found.tsx
export default function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>404 — No encontrado</h1>
      <p>La página que buscas no existe.</p>
      <a href="/" style={{ color: "#111827", textDecoration: "underline" }}>Volver al inicio</a>
    </div>
  );
}