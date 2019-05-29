import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../autenticacion/autenticacion/autenticacion.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  private _displayLogin = true;

  constructor(private authService: AutenticacionService) { }

  ngOnInit() {
    this.authService.authStatus.subscribe(
      authStatus => (this._displayLogin = !authStatus.isAuthenticated)
    );
  }

  getDisplayLogin() {
    return this._displayLogin;
  }
}
