import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    Login = '[Auth] Login',
    LoginSuccess = '[Auth] Login Success',    
}

export class Login implements Action {
    public readonly type = AuthActionTypes.Login;
    constructor(public payload: any) { }    
}

export class LoginSuccess implements Action {
    public readonly type = AuthActionTypes.LoginSuccess;
    constructor(public payload: any) { }    
}

export type AuthActions =
    | Login
    | LoginSuccess;
