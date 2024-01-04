import { Link, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { StokeContext } from "../contexts/StokeContext";
import styles from "../styles/SeeItem.module.css";

function SeeItem() {
  const { items, deleteItem } = useContext(StokeContext);
  console.log(items);
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundItem = items.find((item) => item.id === (id));
    setItem(foundItem); // Atualiza o estado do item com o item encontrado
  }, [id, items]); // Dependências do useEffect

  if (!item) {
    return <h1>Nao há items no estoque</h1>;
  }

  return (
    <div className={styles.detailsContainer}>
      <h1 className={styles.title}>Detalhes do Item</h1>
      <h2 className={styles.subTitle}>{item.nome}</h2>
      <Link to={`/list/${item.id}/update`} className={styles.link}>Atualizar</Link>
      <button onClick={() => deleteItem(id)}>Excluir</button>
      <p className={styles.text}><span className={styles.strongText}>Categoria:</span>{item.categoria}</p>
      <p className={styles.text}><span className={styles.strongText}>Quantidade em estoque:</span>{item.quantidade}</p>
      <p className={styles.text}><span className={styles.strongText}>Preço:</span>R${item.preco.toFixed(2)}</p>
      <p className={styles.text}><span className={styles.strongText}>Descrição:</span>{item.descricao}</p>
      <p className={styles.text}><span className={styles.strongText}>Data de Criação:</span>{(item.createdAt)}</p>
      <p className={styles.text}><span className={styles.strongText}>Última Atualização:</span>{(item.updatedAt)}</p>
    </div>
  );
}

export default SeeItem;
