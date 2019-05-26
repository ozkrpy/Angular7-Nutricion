import { Injectable } from '@angular/core';
import { Rol } from 'src/app/rol.enum';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IAuthStatus {
  isAuthenticated: boolean;
  usuarioRol: Rol;
  usuarioId: string;
}

interface IServerAuthResponse {
  accessToken: string;
}

const defaultAuthStatus = {
  isAuthenticated: false,
  usuarioRol: Rol.Ninguno,
  usuarioId: null
};

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private readonly authProvider: (
    email: string,
    password: string
  ) => Observable<IServerAuthResponse>;

  authStatus = new BehaviorSubject<IAuthStatus>(defaultAuthStatus);

  constructor(private httpClient: HttpClient) {}
}
