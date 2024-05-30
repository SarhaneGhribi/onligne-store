import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

type PrivateRouteProps = {
  element: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
  const isLoggedIn = useSelector((state:any) => state.user !== null);
  return isLoggedIn ? <>{element}</> : <Navigate to="/SignIn" replace />;
};

export default PrivateRoute;
