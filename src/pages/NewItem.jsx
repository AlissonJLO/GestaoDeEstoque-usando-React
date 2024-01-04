import { useState, useContext } from "react";
import { StokeContext } from "../contexts/StokeContext";
import style from "../styles/newitem.module.css";
import { nanoid } from "nanoid";

function NewItem() {
  const stoke = useContext(StokeContext);
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState(0);
  const [preco, setPreco] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const id = nanoid();
    stoke.addItem({
      id,
      nome,
      quantidade,
      preco,
      categoria,
      descricao,
      createdAt: new Date().toLocaleString("pt-BR"),
      updatedAt: new Date().toLocaleString("pt-BR"),
    });
    setNome("");
    setQuantidade(0);
    setPreco(0);
    setCategoria("");
    setDescricao("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={style.opt}>
        <div className={style.fieldGroup}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            className={style.input}
            onChange={(ev) => setNome(ev.target.value)}
            value={nome}
          />
        </div>
        <div className={style.fieldGroup}>
          <label htmlFor="quantidade">Quantidade</label>
          <input
            type="number"
            id="quantidade"
            className={style.input}
            onChange={(ev) => setQuantidade(Number(ev.target.value))}
            value={Number(quantidade)}
          />
        </div>
        <div className={style.fieldGroup}>
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            id="preco"
            className={style.input}
            onChange={(ev) => setPreco(Number(ev.target.value))}
            value={Number(preco)}
          />
        </div>
        <div className={style.fieldGroup}>
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            className={style.select}
            onChange={(ev) => setCategoria(ev.target.value)}
            value={categoria}
          >
            <option value="">Selecione uma categoria...</option>
            <option value="Jogos">Jogos</option>
            <option value="Livros">Livros</option>
            <option value="Eletrodomesticos">Eletrodomesticos</option>
            <option value="Eletronicos">Eletronicos</option>
            <option value="Roupas">Roupas</option>
            <option value="Moveis">Moveis</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
      </div>
      <div className={style.textarea}>
        <label htmlFor="descri">Descrição</label>
        <textarea
          onChange={(ev) => setDescricao(ev.target.value)}
          value={descricao}
          id="descri"
        ></textarea>
        <button type="submit">Salvar</button>
      </div>
    </form>
  );
}

export default NewItem;
