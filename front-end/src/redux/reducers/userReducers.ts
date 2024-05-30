import { User, UserActions,userActionTypes } from "../types/userTypes";

const initialState: User | null = null;

const userReducer = (
  state = initialState,
  action: UserActions
): User | null => {
  switch (action.type) {
    case userActionTypes.LOGIN:
      return action.payload;
    case userActionTypes.LOGOUT:
      return null;
    default:
      return state;
  }
};

export default userReducer;
