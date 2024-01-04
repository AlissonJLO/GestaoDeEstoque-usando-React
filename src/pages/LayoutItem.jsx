import { NavLink, Outlet } from "react-router-dom";
import style from "../styles/listLayout.module.css";

function List() {
  return (
    <div>
      <h1>Stoke Items</h1>
      <div className={style.nav}>
        <nav>
          <NavLink
            to="/list"
            end
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Todos os itens
          </NavLink>
          <NavLink
            to="/list/new"
            className={({ isActive }) => (isActive ? style.active : "")}
          >
            Novo item
          </NavLink>
        </nav>
        <hr />
      </div>
      <div>
      <Outlet />
      </div>
    </div>
  );
}

export default List;
