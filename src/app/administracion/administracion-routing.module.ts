import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioAdministracionComponent } from './inicio-administracion/inicio-administracion.component';
import { AuthGuardGuard } from '../autenticacion/auth-guard.guard';
import { Rol } from '../rol.enum';
import { TablaUsuarioComponent } from './tabla-usuario/tabla-usuario.component';
import { AdministracionUsuarioComponent } from './administracion-usuario/administracion-usuario.component';
import { VistaUsuarioComponent } from '../usuarios/vista-usuario/vista-usuario.component';
import { ResolveUsuario } from '../usuarios/resolve.usuario';

const routes: Routes = [
  { path: '', redirectTo: '/administracion/inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    component: InicioAdministracionComponent,
    canActivate: [AuthGuardGuard],
    data: {
      expectedRole: Rol.Administrador,
    }
  },
  { 
    path: 'users', 
    component: AdministracionUsuarioComponent, 
    children: [
      { 
        path: '', 
        component: TablaUsuarioComponent, 
        outlet: 'master' 
      }, 
      { 
        path: 'user', 
        component: VistaUsuarioComponent, 
        outlet: 'detail', 
        resolve: { 
          user: ResolveUsuario, 
        }, 
      },
    ], 
    canActivate: [AuthGuardGuard], 
    canActivateChild: [AuthGuardGuard], 
    data: { expectedRole: Rol.Administrador, }, 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }

