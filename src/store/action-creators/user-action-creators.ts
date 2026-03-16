import {
  IAddUserAction,
  IDeleteUserAction,
  IUpdateUserAction,
  IUser,
  UserActionsEnum,
} from "../../models/user";

export const addUserActionCreator = (user: IUser): IAddUserAction => {
  return { type: UserActionsEnum.ADD_USER, payload: user };
};

export const deleteUserActionCreator = (id: IUser["id"]): IDeleteUserAction => {
  return { type: UserActionsEnum.DELETE_USER, payload: id };
};

export const updateUserActionCreator = (user: IUser): IUpdateUserAction => {
  return { type: UserActionsEnum.UPDATE_USER, payload: user };
};
