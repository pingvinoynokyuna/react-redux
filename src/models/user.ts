export interface IUser {
  id: number;
  name: string;
  age: number;
}

export interface IUsesrState {
  users: IUser[];
  error: string | null;
  loading: boolean;
}

export enum UserActionsEnum {
  DELETE_USER = "DELETE_USER",
  UPDATE_USER = "UPDATE_USER",
  ADD_USER = "ADD_USER",
}

export interface IDeleteUserAction {
  type: UserActionsEnum.DELETE_USER;
  payload: number;
}

export interface IUpdateUserAction {
  type: UserActionsEnum.UPDATE_USER;
  payload: IUser;
}

export interface IAddUserAction {
  type: UserActionsEnum.ADD_USER;
  payload: IUser;
}

export type TUserActions =
  | IDeleteUserAction
  | IUpdateUserAction
  | IAddUserAction;
