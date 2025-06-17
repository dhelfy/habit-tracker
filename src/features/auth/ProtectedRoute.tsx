import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  isAuth: boolean;
  children: React.ReactNode;
};

export const ProtectedRoute = ({ isAuth, children }: ProtectedRouteProps) => {
  if (!isAuth) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};