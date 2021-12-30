import { BrowserRouter, Switch } from "react-router-dom";
import { LoginScreen } from "../screens/LoginScreen";
import { PublicRoute } from "./PublicRoute";

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" component={LoginScreen} isAuthenticated={false} />
      </Switch>
    </BrowserRouter>
  );
};
