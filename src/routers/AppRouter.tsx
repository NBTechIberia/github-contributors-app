import { useEffect, useState } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuth } from "firebase/auth";
import { LoginScreen } from "../screens/LoginScreen";
import { PublicRoute } from "./PublicRoute";
import { RootState } from "../store";
import { IAuthState } from "../reducers/authReducer/types";
import {
  checkTokenAuth,
  getDecodeToken,
  getTokenFromLS,
} from "../helpers/authJwt";
import { login } from "../reducers/authReducer/actionCreators";

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
    return <h1>Loading</h1>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute
          path="/"
          component={LoginScreen}
          isAuthenticated={isLoggedIn}
        />
      </Switch>
    </BrowserRouter>
  );
};
