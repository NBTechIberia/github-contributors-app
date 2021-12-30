import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import { DashboardScreen } from "../../screens/DashboardScreen";
import { SettingsScreen } from "../../screens/SettingsScreen";

import { ROUTE_DASHBOARD, ROUTE_SETTINGS } from "../../routers/types";
import { IAuthState } from "../../reducers/authReducer/types";
import { RootState } from "../../store";
import { logoutUser } from "../../reducers/authReducer/actionCreators";

import { AppBar } from "../AppBar";
import { Drawer } from "../Drawer";

export const Content: React.FC = () => {
  const dispatch = useDispatch();
  const { decodeToken } = useSelector<RootState, IAuthState>(
    (state) => state.auth
  );

  const handleClickLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        handleClickLogout={handleClickLogout}
        name={decodeToken?.name || ""}
        avatar={decodeToken?.picture || ""}
      />
      <Drawer />
      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
        <Switch>
          <Route exact path={ROUTE_DASHBOARD} component={DashboardScreen} />
          <Route exact path={ROUTE_SETTINGS} component={SettingsScreen} />
        </Switch>
      </Box>
    </Box>
  );
};
