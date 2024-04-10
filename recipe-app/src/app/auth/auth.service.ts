import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly BASE_URL =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  private readonly API_KEY = 'AIzaSyAhy2cLa-6IPe8yNnqMGHcljELUuDfAeSI';
  constructor(private http: HttpClient) {}

  singup(email: string, password: string) {
    console.log('singup');

    return this.http
      .post<AuthResponseData>(`${this.BASE_URL}${this.API_KEY}`, {
        email,
        password,
        returnSecureToken: true,
      })
      .pipe(
        catchError(errorResponse => {
          let errorMessage = 'An unknown error occurred!';
          if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
          }

          switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMessage = 'This email exists already!';
              break;
          }

          return throwError(errorMessage);
        }),
      );
  }
}
