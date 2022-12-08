import { Navigate, Outlet } from "react-router-dom";
import { useGlobal } from "../Context/Context";

export const PrivateRoute = () => {
  const { currentUser, isAuthenticating } = useGlobal();

  if (isAuthenticating) {
    return null;
  }

  return currentUser ? <Outlet /> : <Navigate to="/login" />;
};
