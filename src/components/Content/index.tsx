import { Route, Switch } from "react-router-dom";
import { ROUTE_DASHBOARD } from "../../routers/types";
import { DashboardScreen } from "../../screens/DashboardScreen";

export const Content: React.FC = () => {
  return (
    <Switch>
      <Route exact path={ROUTE_DASHBOARD} component={DashboardScreen} />
    </Switch>
  );
};
