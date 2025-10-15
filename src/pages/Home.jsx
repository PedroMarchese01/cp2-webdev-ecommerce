import { useEffect } from "react";
import Sect from "../components/Sect";
import CardProvider from "../components/CardProvider";
const api = import.meta.env.VITE_API
export default function Home() {

  return (
    <div>
        <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>
        <Sect title="eltrônicos">
          <CardProvider product="electronics"/>
        </Sect>
        <Sect title="joias">
          <CardProvider product="jewelery"/>
        </Sect>
        <Sect title="Roupas masculinas">
          <CardProvider product="men's clothing"/>
        </Sect>
    </div>
  );
}
