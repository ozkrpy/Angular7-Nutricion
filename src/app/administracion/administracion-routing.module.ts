import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioAdministracionComponent } from './inicio-administracion/inicio-administracion.component';
import { AuthGuardGuard } from '../autenticacion/auth-guard.guard';
import { Rol } from '../rol.enum';

const routes: Routes = [
  { path: '', redirectTo: '/administracion/inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    component: InicioAdministracionComponent,
    canActivate: [AuthGuardGuard],    
    data: {      
      expectedRole: Rol.Administrador,    
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule {}

