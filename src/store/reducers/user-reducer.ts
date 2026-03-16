import { users } from "../../data";
import { IUsesrState, TUserActions, UserActionsEnum } from "../../models/user";

const initialState: IUsesrState = {
  users: users,
  error: null,
  loading: false,
};

export const userReducer = (
  state = initialState,
  action: TUserActions,
): IUsesrState => {
  switch (action.type) {
    case UserActionsEnum.ADD_USER:
      return { ...state, users: [...state.users, action.payload] };
    case UserActionsEnum.UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user,
        ),
      };
    case UserActionsEnum.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};
