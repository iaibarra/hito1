import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { total } = useCart(); // trae el total del contexto
  const { token, logout } = useUser();


  return (
    <nav className="navbar navbar-light bg-light px-4 d-flex justify-content-between">
      <span className="navbar-brand mb-0 h1">Pizzería Mamma Mia!</span>

      <Link to="/" className="btn btn-outline-primary">🍕 Home</Link>

      {token ? (
        <>
          <Link to="/profile" className="btn btn-outline-success">🔓 Profile</Link>
          <button className="btn btn-outline-danger">🔒 Logout</button>
        </>
      ) : (
        <>
          {/* <Link to="/login" className="btn btn-outline-secondary">🔐 Login</Link>
          <Link to="/register" className="btn btn-outline-secondary">🔐 Register</Link> */}
        </>
      )}

      <Link to="/cart" className="btn btn-warning">
        🛒 Total: ${total.toLocaleString()}
      </Link>
    </nav>
  );
};

export default Navbar;

