import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import { googleAuthProvider } from "../../firebase/config";
import { FirebaseError } from "firebase/app";
import jwtDecode from "jwt-decode";
import { Dispatch } from "redux";
import {
  activateLoading,
  deactivateLoading,
  setError,
} from "../uiReducer/actionCreators";
import * as actionTypes from "./actionTypes";
import { JWT_KEY_LOCAL_STORAGE } from "./constants";
import { IAuthAction, IJwtToken } from "./types";

export const login = (
  uid: string,
  name: string = "Undefined",
  decodeToken: IJwtToken
): IAuthAction => ({
  type: actionTypes.LOGIN,
  payload: {
    value: { uid, name, decodeToken },
  },
});

export const logout = (): IAuthAction => ({
  type: actionTypes.LOGOUT,
  payload: { value: null },
});

const getUserAndDoDispatch = async (user: User, dispatch: Dispatch) => {
  const { token } = await user.getIdTokenResult();
  localStorage.setItem(JWT_KEY_LOCAL_STORAGE, token);
  dispatch(login(user.uid, user.displayName || "", jwtDecode(token)));
};

export const loginWithGoogle = () => {
  return (dispatch: Dispatch) => {
    dispatch(activateLoading());
    const auth = getAuth();
    signInWithPopup(auth, googleAuthProvider)
      .then(async ({ user }) => {
        await getUserAndDoDispatch(user, dispatch);
      })
      .catch((err: FirebaseError) => {
        dispatch(setError(err.message));
      })
      .finally(() => {
        dispatch(deactivateLoading());
      });
  };
};

export const loginUserPassword = (user: string, password: string) => {
  return (dispatch: Dispatch) => {
    dispatch(activateLoading());
    const auth = getAuth();
    signInWithEmailAndPassword(auth, user, password)
      .then(async ({ user }) => {
        await getUserAndDoDispatch(user, dispatch);
      })
      .catch((err: FirebaseError) => {
        dispatch(setError(err.message));
      })
      .finally(() => {
        dispatch(deactivateLoading());
      });
  };
};

export const logoutUser = () => {
  return (dispatch: Dispatch) => {
    const auth = getAuth();
    signOut(auth).then(() => {
      localStorage.removeItem(JWT_KEY_LOCAL_STORAGE);
      dispatch(logout());
    });
  };
};
