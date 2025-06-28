import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>404 - ¡Oops! Esta pizza no existe 🍕</h2>
      <Link to="/">Volver al inicio</Link>
    </div>
  );
};

export default NotFound;
