import { User, UserActions, userActionTypes } from "../types/userTypes";

export const login = (user: User): UserActions => ({
  type: userActionTypes.LOGIN,
  payload: user,
});

export const logout = (): UserActions => ({
  type: userActionTypes.LOGOUT,
  payload: null,
});
