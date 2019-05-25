import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioPacientesComponent } from './inicio-pacientes/inicio-pacientes.component';
import { NuevoPacienteComponent } from './nuevo-paciente/nuevo-paciente.component';
import { ListaPacientesComponent } from './lista-pacientes/lista-pacientes.component';

const routes: Routes = [
  { path: '', redirectTo: '/pacientes/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioPacientesComponent },
  { path: 'listar', component: ListaPacientesComponent },
  { path: 'nuevo', component: NuevoPacienteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacientesRoutingModule {}
