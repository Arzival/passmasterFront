import { Link } from 'react-router-dom';
//import '../../styles/nav.css';

const Nav = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-list">
        <li>
          <Link to="/home">Inicio</Link>
        </li>
        <li>
          <Link to="/roadmap">Roadmap</Link>
        </li>
        <div className="auth-links"> {/* Agrupando las opciones de autenticación */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Registro</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
