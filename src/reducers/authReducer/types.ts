export interface IAuthAction {
  type: string;
  payload: {
    value: any;
  };
}

export interface IAuthState {
  uid?: string;
  name?: string;
  decodeToken?: IJwtToken;
}

export interface IJwtToken {
  ud: string;
  auth_time: number;
  email: string;
  email_verified: false;
  exp: number;
  firebase: { identities: any; sign_in_provider: string };
  iat: number;
  iss: string;
  sub: string;
  user_id: string;
  name: string;
  picture?: string;
}
