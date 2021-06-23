import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Token } from '../models/token';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../store/app/app.state';
import { authData } from '../store/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentTokenSubject: BehaviorSubject<Token>;
  public currentUserToken: Observable<Token>;
  private userId: number;
  private role: string;
  private token: string;
  private tokenSubscript: Subscription;

  baseUrl = "https://localhost:44309";

  constructor(private store: Store<IAppState>, private http: HttpClient) {

    // Subscribe to token notification
    this.tokenSubscript = this.store.pipe(select(authData)).subscribe(authData => {
      this.userId = authData.userId;
      this.role = authData.role;
      this.token = authData.token;
    });

    /*this.currentTokenSubject = new BehaviorSubject<Token>(JSON.parse(localStorage.getItem('token')));*/
    //this.currentUserToken = this.currentTokenSubject.asObservable();
  }

  public get getCurrentUserToken(): Token {
    return this.currentTokenSubject.value;
  }



  login(userName: string, password: string) {
    debugger;
    let data =
    {
      userName: userName,
      password: password
    }
    return this.http.post<any>(this.baseUrl + '/api/login', data)
      .pipe(map(res => {
        // login successful if there's a jwt token in the response
        let token = new Token();
        debugger;
        if (res && res.token) {
          localStorage.setItem('token', JSON.stringify(token));
          //this.currentTokenSubject.next(token);
        }
        return token;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    this.currentTokenSubject.next(null);
  }

  isTokenExpired(token?: Token): boolean {
    if (token && token.token && token.expires) {
      const date = token.expires;
      return !(new Date(date.getDate()).valueOf() > new Date().valueOf());
    } else {
      return true;
    }
  }

  isLoggedIn() {
    return !this.isTokenExpired(this.getCurrentUserToken);
  }
}
