import { Effect, ofType, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import {
    Login,
    LoginSuccess,
    AuthActionTypes,
} from './auth.actions';
import { of } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

    @Effect()
    login$ = this.actions$.pipe(
        ofType<Login>(AuthActionTypes.Login),
        map(action => action.payload),
      switchMap((payload) => {
            return this.authService.login(payload);
        }),
      switchMap((data: any) => {
            return of(new LoginSuccess(data));
      })   
      
    )
      ;

    @Effect({ dispatch: false })
    loginSuccess$ = this.actions$.pipe(
        ofType<LoginSuccess>(AuthActionTypes.LoginSuccess),
        map(action => action.payload),
        tap((payload) => {
            localStorage.setItem('userId', payload.userId);
            localStorage.setItem('role', payload.role);
            localStorage.setItem('token', payload.token);
            this.router.navigate(['/products']);
        })        
    );

    constructor(
        private authService: AuthService,
        private actions$: Actions,
        private router: Router,
    ) { }
}
