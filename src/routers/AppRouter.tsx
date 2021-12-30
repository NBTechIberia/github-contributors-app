import { useEffect, useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";

import { RootState } from "../store";
import { IAuthState } from "../reducers/authReducer/types";
import { login } from "../reducers/authReducer/actionCreators";

import {
  checkTokenAuth,
  getDecodeToken,
  getTokenFromLS,
} from "../helpers/authJwt";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

import { LoginScreen } from "../screens/LoginScreen";
import { LoadingScreen } from "../screens/LoadingScreen";

import { ROUTE_DASHBOARD, ROUTE_LOGIN } from "./types";

export const AppRouter: React.FC = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector<RootState, IAuthState>((state) => state.auth);

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      if (user?.uid) {
        const token = getTokenFromLS();
        if (token && checkTokenAuth(user.uid, token)) {
          dispatch(
            login(user.uid, user.displayName || "", getDecodeToken(token))
          );
          setIsLoggedIn(true);
        }
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch]);

  useEffect(() => {
    !!uid && setIsLoggedIn(true);
  }, [uid]);

  if (checking) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          path={ROUTE_LOGIN}
          component={LoginScreen}
          isAuthenticated={isLoggedIn}
        />
        <PrivateRoute
          path={ROUTE_DASHBOARD}
          render={() => <h2>Dashboard</h2>}
          isAuthenticated={isLoggedIn}
        />
      </Switch>
    </BrowserRouter>
  );
};
