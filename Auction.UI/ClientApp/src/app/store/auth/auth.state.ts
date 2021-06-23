import { IAuth } from "../../models/auth.interface";
import { AuthActions, AuthActionTypes } from "./auth.actions";

export interface IAuthState {
  authData: IAuth,
}

export const initialAuthState: IAuthState = {
  authData: { userId: 0, role: null, token: null },
};

export const authReducer = (state = initialAuthState, action: AuthActions): IAuthState => {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        authData: {
          ...state.authData,
          userId: action.payload.userId,
          role: action.payload.role,
          token: action.payload.token,
        },
      };
    }
    default:
      return state;
  }
};
