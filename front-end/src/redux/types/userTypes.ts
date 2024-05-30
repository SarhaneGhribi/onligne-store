interface User {
  id: string;
  name: string;
  token: string;
};

enum userActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
};

interface LoginAction {
  type: userActionTypes.LOGIN;
  payload: User;
};

interface LogoutAction {
  type: userActionTypes.LOGOUT;
  payload: null;
};

type UserActions = LoginAction | LogoutAction;

export { userActionTypes };
export type { User, UserActions };
