import React from "react";

import { Route, Redirect } from "react-router-dom";
import { AuthRouteProps, ROUTE_DASHBOARD } from "./types";

export const PublicRoute: React.FC<AuthRouteProps> = ({
  isAuthenticated,
  ...rest
}) => {
  return isAuthenticated ? (
    <Redirect to={ROUTE_DASHBOARD} />
  ) : (
    <Route {...rest} />
  );
};
