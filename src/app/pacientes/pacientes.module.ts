import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { InicioPacientesComponent } from './inicio-pacientes/inicio-pacientes.component';
import { NuevoPacienteComponent } from './nuevo-paciente/nuevo-paciente.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';

@NgModule({
  declarations: [InicioPacientesComponent, NuevoPacienteComponent, ListaPacientesComponent],
  imports: [
    CommonModule,
    PacientesRoutingModule
  ]
})
export class PacientesModule { }
