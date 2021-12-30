import jwtDecode from "jwt-decode";
import { JWT_KEY_LOCAL_STORAGE } from "../reducers/authReducer/constants";
import { IJwtToken } from "../reducers/authReducer/types";

export const checkTokenAuth = (uid: string, token: string): boolean => {
  const decodeToken = getDecodeToken(token);
  if (decodeToken) {
    return decodeToken.user_id === uid;
  }
  return false;
};

export const getTokenFromLS = (): string | null => {
  return localStorage.getItem(JWT_KEY_LOCAL_STORAGE);
};

export const getDecodeToken = (token: string): IJwtToken => {
  return jwtDecode(token);
};

export const removeTokenFromLS = () => {
  localStorage.removeItem(JWT_KEY_LOCAL_STORAGE);
};

export const saveTokenInLS = (token: string) => {
  localStorage.setItem(JWT_KEY_LOCAL_STORAGE, token);
};
