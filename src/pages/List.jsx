import style from "../styles/list.module.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StokeContext } from "../contexts/StokeContext";

function List() {
  const { items, deleteItem } = useContext(StokeContext);
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Em Estoque</th>
          <th>Categoria</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.quantidade} unid.</td>
            <td>{item.categoria}</td>
            <td>
              <Link to={`/list/${item.id}`} className={style.buttonSee}>
                Ver
              </Link>
              <Link to={`/list/${item.id}/update`} className={style.buttonUp}>
                Atualizar
              </Link>
              <button className={style.buttonDel} onClick={() => deleteItem(item.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default List;
