import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { InicioUsuariosComponent } from './inicio-usuarios/inicio-usuarios.component';
import { LogoutUsuariosComponent } from './logout-usuarios/logout-usuarios.component';
import { AppMaterialModule } from '../app-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UsuariosMaterialModule } from './usuarios-material/usuarios-material.module';
import { SharedComponentsModule } from '../shared-components.module';
//import { VistaUsuarioComponent } from './vista-usuario/vista-usuario.component';

@NgModule({
  declarations: [InicioUsuariosComponent, LogoutUsuariosComponent
    //, VistaUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    UsuariosMaterialModule,
    AppMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    SharedComponentsModule
  ]
})
export class UsuariosModule { }
