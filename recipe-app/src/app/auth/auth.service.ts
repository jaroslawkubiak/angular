import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, catchError, tap, throwError } from 'rxjs';
import { User } from './user.model';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  user = new Subject<User>();

  private readonly SINGUP_URL =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  private readonly LOGIN_URL =
    'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
  private readonly API_KEY = 'AIzaSyAhy2cLa-6IPe8yNnqMGHcljELUuDfAeSI';

  constructor(private http: HttpClient) {}

  singup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(`${this.SINGUP_URL}${this.API_KEY}`, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(this.handleError),
        tap(resData => {
          this.handleAuthentication(
            resData.email,
            resData.localId,
            resData.idToken,
            +resData.expiresIn,
          );
        }),
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(`${this.LOGIN_URL}${this.API_KEY}`, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(catchError(this.handleError));
  }

  private handleAuthentication(
    email: string,
    userId: string,
    token: string,
    expiresIn: number,
  ) {
    const user = new User(
      email,
      userId,
      token,
      new Date(new Date().getTime() + expiresIn * 1000),
    );
    this.user.next(user);
  }

  private handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
    }

    console.log(errorResponse);
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already!';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exists!';
        break;
      case 'INVALID_LOGIN_CREDENTIALS':
        errorMessage = 'Email or password is not correct!';
        break;
    }

    return throwError(errorMessage);
  }
}
