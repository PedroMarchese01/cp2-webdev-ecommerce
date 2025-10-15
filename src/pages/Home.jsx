import { useEffect } from "react";
const api = import.meta.env.VITE_API
export default function Home() {
  useEffect(() => {
    fetch(api)
    .then
  }, [])
  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>
        <p>ola</p>
    </div>
  );
}
