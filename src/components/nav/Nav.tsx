import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-md p-3 rounded-md shadow-lg">
      <ul className="list-none m-0 p-0 flex items-center w-full gap-4">
        <li>
          <Link to="/home" className="text-black font-bold">PassMaster</Link>
        </li>
        <div className="ml-auto flex gap-4">
          <li>
            <Link to="/login" className="text-black font-bold">Login</Link>
          </li>
          <li>
            <Link to="/register" className="text-black font-bold">Registro</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
