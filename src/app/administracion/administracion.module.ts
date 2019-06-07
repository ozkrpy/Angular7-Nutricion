import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { InicioAdministracionComponent } from './inicio-administracion/inicio-administracion.component';
import { SharedComponentsModule } from '../shared-components.module';
import { AdministracionUsuarioComponent } from './administracion-usuario/administracion-usuario.component';
import { TablaUsuarioComponent } from './tabla-usuario/tabla-usuario.component';
import { ResolveUsuario } from '../usuarios/resolve.usuario';
import { AppMaterialModule } from '../app-material.module';


@NgModule({
  declarations: [InicioAdministracionComponent, AdministracionUsuarioComponent, TablaUsuarioComponent],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    SharedComponentsModule,
    AppMaterialModule
  ],
  providers: [
    ResolveUsuario
  ]
})
export class AdministracionModule { }
