import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const { token, role } = useContext(AuthContext);

  const isAllowed = allowedRoles.include(role);
  const accessibleRoute =
    token && isAllowed ? children : <Navigate to="/login" replace={true} />;

  return accessibleRoute;
}

export default ProtectedRoute;
