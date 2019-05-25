import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { InicioAdministracionComponent } from './inicio-administracion/inicio-administracion.component';

@NgModule({
  declarations: [InicioAdministracionComponent],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
