import { Injectable } from '@angular/core';
import { Rol } from 'src/app/rol.enum';
import {
  BehaviorSubject,
  Observable,
  of,
  throwError as observableThrowError
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { catchError, map } from 'rxjs/operators';
import * as decode from 'jwt-decode';
import { transformError } from '../../common/common';
import { CacheService } from '../cache.service';

export interface IAuthStatus {
  isAuthenticated: boolean;
  usuarioRol: Rol;
  usuarioId: string;
}

interface IServerAuthResponse {
  token: string;
}

const defaultAuthStatus = {
  isAuthenticated: false,
  usuarioRol: Rol.Ninguno,
  usuarioId: null
};

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService extends CacheService{
  private readonly authProvider: (
    email: string,
    password: string
  ) => Observable<IServerAuthResponse>;

  authStatus = new BehaviorSubject<IAuthStatus>(defaultAuthStatus);

  constructor(private httpClient: HttpClient) {
    super();
    this.authStatus.subscribe(authStatus => this.setItem('authStatus', authStatus));
    //this.authProvider = this.exampleAuthProvider 
  }

  private exampleAuthProvider(email: string,  password: string ): Observable<IServerAuthResponse> {
    return this.httpClient
               .post<IServerAuthResponse>(`${environment.baseUrl}/login`, {username: email,    password: password,  }) 
  } 

  login(email: string, password: string): Observable<IAuthStatus> {
    this.logout();
    const loginResponse = this.exampleAuthProvider(email, password).pipe(
      map(value => {
        this.setToken(value.token);
        console.log(this.getToken());
        return decode(value.token) as IAuthStatus;
      }),
      catchError(transformError)
    );
    loginResponse.subscribe(
      res => {
        this.authStatus.next(res);
      },
      err => {
        this.logout();
        return observableThrowError(err);
      }
    );
    return loginResponse;
  }

  logout() {
    this.clearToken();
    this.authStatus.next(defaultAuthStatus);
  }

  private setToken(jwt: string) {
    this.setItem('jwt', jwt);
  }

  private getDecodedToken(): IAuthStatus {
    return decode(this.getItem('jwt'));
  }

  getToken(): string {
    return this.getItem('jwt') || '';
  }

  private clearToken() {
    this.removeItem('jwt');
  }
}
