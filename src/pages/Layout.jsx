import { Outlet, Link } from "react-router-dom";
import style from "../styles/layoute.module.css";

function Layout() {
  return (
    <div className={style.lay}>
      <header className={style.header}>
        <p>REACT STOKE</p>
        <nav className={style.nav}>
          <Link to="/">Inicio</Link>
          <Link to="/list">Items</Link>
        </nav>
      </header>
      <div className={style.cont}>
        <Outlet />
      </div>
      <footer className={style.footer}>
        <p>
          Feito com <strong>React e React Router</strong>
        </p>
      </footer>
    </div>
  );
}

export default Layout;
