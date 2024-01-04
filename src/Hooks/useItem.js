// useItem.js
import { useContext } from "react";
import { StokeContext } from "../contexts/StokeContext";

// Hook personalizado para buscar um item pelo ID
export default function useItem(id) {
  const { items } = useContext(StokeContext);
  const item = items.find((item) => item.id === Number(id));

  return item;
}
