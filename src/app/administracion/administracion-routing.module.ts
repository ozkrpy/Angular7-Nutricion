import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioAdministracionComponent } from './inicio-administracion/inicio-administracion.component';

const routes: Routes = [
  { path: '', redirectTo: '/administracion/inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    component: InicioAdministracionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule {}
