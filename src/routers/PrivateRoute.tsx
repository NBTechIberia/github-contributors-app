import React from "react";

import { Route, Redirect } from "react-router-dom";
import { AuthRouteProps, ROUTE_LOGIN } from "./types";

export const PrivateRoute: React.FC<AuthRouteProps> = ({
  isAuthenticated,
  ...rest
}: AuthRouteProps) => {
  return isAuthenticated ? <Route {...rest} /> : <Redirect to={ROUTE_LOGIN} />;
};
