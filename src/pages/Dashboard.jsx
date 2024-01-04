import Style from "../styles/dashboard.module.css";
import { useContext } from "react";
import { StokeContext } from "../contexts/StokeContext";
import { Link } from "react-router-dom";

function Dashboard() {
  const { items } = useContext(StokeContext);
  console.log(items);

  function contarItensNosUltimosDezDias(itens) {
    const dataAtual = new Date();
    const dezDiasAtras = new Date();
    dezDiasAtras.setDate(dataAtual.getDate() - 10);

    const itensRecentes = itens.filter((item) => {
      const dataDoItem = new Date(item.createdAt);
      return dataDoItem >= dezDiasAtras;
    });

    return itensRecentes.length;
  }
  function calcularInventarioTotal(itens) {
    return itens.reduce((total, item) => total + item.quantidade, 0);
  }

  function contarItensComPoucaQuantidade(itens) {
    const itensComPoucaQuantidade = itens.filter(
      (item) => item.quantidade <= 10
    );
    return itensComPoucaQuantidade.length;
  }

  function obterItensRecentes(itens) {
    const dataAtual = new Date();
    const dezDiasAtras = new Date(
      dataAtual.getFullYear(),
      dataAtual.getMonth(),
      dataAtual.getDate() - 10
    );

    return itens.filter((item) => {
      const dataDoItem = new Date(item.createdAt);
      return dataDoItem >= dezDiasAtras;
    });
  }

  function obterItensComPoucaQuantidade(itens) {
    return itens.filter((item) => item.quantidade <= 10);
  }

  const itensRecentes = obterItensRecentes(items);
  const itensAcabando = obterItensComPoucaQuantidade(items);

  return (
    <>
      <h1>Dashboard</h1>
      <div className={Style.quantidade}>
        <div>
          <h3>Diversidade de itens</h3>
          <p>{items.length}</p>
        </div>
        <div>
          <h3>Inventario total</h3>
          <p>{calcularInventarioTotal(items)}</p>
        </div>
        <div>
          <h3>Itens recentes</h3>
          <p>{contarItensNosUltimosDezDias(items)}</p>
        </div>
        <div>
          <h3>Itens acabando</h3>
          <p>{contarItensComPoucaQuantidade(items)}</p>
        </div>
      </div>
      <div className={Style.dashboardSection}>
        <div className={Style.itemsRecentes}>
          <div className={Style.sectionHeader}>
            <h2>Itens recentes</h2>
            <h2>Ações</h2>
          </div>
          <div className={Style.itemContainer}>
            {" "}
            {/* Adicionado para rolagem */}
            {itensRecentes.length > 0 ? (
              itensRecentes.map((item) => (
                <div key={item.id} className={Style.item}>
                  <span>{item.nome}</span>
                  <Link to={`/list/${item.id}`}>
                    <button className={Style.acao}>Ver</button>
                  </Link>
                </div>
              ))
            ) : (
              <p>Não há itens recentes.</p>
            )}
          </div>
        </div>
        <div className={Style.itemsAcabando}>
          <div className={Style.sectionHeader}>
            <h2>Itens acabando</h2>
            <h2>Ações</h2>
          </div>
          <div className={Style.itemContainer}>
            {" "}
            {/* Adicionado para rolagem */}
            {itensAcabando.length > 0 ? (
              itensAcabando.map((item) => (
                <div key={item.id} className={Style.item}>
                  <span>{item.nome}</span>
                  <span>Qtd. {item.quantidade}</span>
                  <button className={Style.acao}>Ver</button>
                </div>
              ))
            ) : (
              <p>Não há itens acabando.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
