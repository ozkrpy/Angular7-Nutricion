import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioUsuariosComponent } from './inicio-usuarios/inicio-usuarios.component';
import { LogoutUsuariosComponent } from './logout-usuarios/logout-usuarios.component';
import { AuthGuardGuard } from '../autenticacion/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '/usuarios/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioUsuariosComponent, canActivate: [AuthGuardGuard] },
  { path: 'salir', component: LogoutUsuariosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule {}
