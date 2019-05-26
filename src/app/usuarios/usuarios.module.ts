import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { InicioUsuariosComponent } from './inicio-usuarios/inicio-usuarios.component';
import { LogoutUsuariosComponent } from './logout-usuarios/logout-usuarios.component';

@NgModule({
  declarations: [InicioUsuariosComponent, LogoutUsuariosComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
