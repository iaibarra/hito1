import { Navigate } from "react-router-dom";

const PublicRoute = ({ token, redirectPath = "/", children }) => {
  if (token) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};

export default PublicRoute;
