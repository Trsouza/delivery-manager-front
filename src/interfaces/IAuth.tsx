import { IUser } from "./IUser";

export interface IAuthRequest {
  email: string;
  password: string;
}

export interface IAuthResponse {
  token?: string;
  user?: IUser;
}

export interface IContext extends IAuthResponse {
  authenticate: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signed: boolean;
  isLoading: boolean;
}

export interface IAuthProvider {
  children: JSX.Element;
}