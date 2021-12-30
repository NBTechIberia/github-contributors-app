import { RouteProps } from "react-router-dom";

export interface AuthRouteProps extends RouteProps {
  isAuthenticated: boolean;
}

export const ROUTE_DASHBOARD = "/";
export const ROUTE_LOGIN = "/login";
export const ROUTE_SETTINGS = "/settings";
