import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ token, redirectPath = "/login", children }) => {
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default ProtectedRoute;
