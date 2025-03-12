import { ReactNode } from "react";
import { Navigate } from "react-router";

interface IProps {
  isAllowed: boolean;
  children: ReactNode;
  redirectPath: string | number;
}
const ProtectedRoute = ({ isAllowed, children, redirectPath }: IProps) => {
  if (!isAllowed) return <Navigate to={redirectPath} replace />;
  return children;
};

export default ProtectedRoute;
