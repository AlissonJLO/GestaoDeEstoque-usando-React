import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const StokeContext = createContext({});

StockContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("obc-react-stock");
    if (!storedItems) return [];
    const items = JSON.parse(storedItems);
    return items;
  });

  const addItem = (item) => {
    setItems((current) => {
      const updatedItems = [...current, item];
      localStorage.setItem("obc-react-stock", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };
  function updateItem(itemsArray, itemId, newData) {
    console.log("Atualizando item", itemId, "com dados", newData);

    const updatedItems = itemsArray.map((item) => {
      if (item.id === itemId) {
        console.log("Encontrado item para atualização:", item);

        const updatedItem = {
          ...item,
          ...newData,
          updatedAt: new Date().toLocaleString("pt-BR"),
        };

        console.log("Item após atualização:", updatedItem);
        return updatedItem;
      }
      // Retorna itens não modificados
      return item;
    });

    console.log(
      "Array de itens antes de salvar no localStorage:",
      updatedItems
    );

    setItems(() => {
      localStorage.setItem("obc-react-stock", JSON.stringify(updatedItems));
      console.log("Array de itens salvo no localStorage:", updatedItems);
      return updatedItems;
    });

    console.log("Função updateItem completada.");
  }

  function deleteItem(itemId) {
    setItems((currentItems) => {
      // Filtra o array para remover o item com o id especificado
      const updatedItems = currentItems.filter((item) => item.id !== itemId);

      // Atualiza o localStorage com o novo array
      localStorage.setItem("obc-react-stock", JSON.stringify(updatedItems));

      // Retorna o novo array de itens
      return updatedItems;
    });
  }

  const stoke = {
    items,
    addItem,
    updateItem,
    deleteItem,
  };

  return (
    <StokeContext.Provider value={stoke}>{children}</StokeContext.Provider>
  );
}
