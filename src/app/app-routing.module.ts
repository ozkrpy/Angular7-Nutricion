import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaNoExisteComponent } from './pagina-no-existe/pagina-no-existe.component';
import { InicioComponent } from './inicio/inicio.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { AccesoUsuarioComponent } from './acceso-usuario/acceso-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'alimentos', loadChildren: './alimentos/alimentos.module#AlimentosModule' },
  { path: 'pacientes', loadChildren: './pacientes/pacientes.module#PacientesModule' },
  { path: 'usuarios', loadChildren: './usuarios/usuarios.module#UsuariosModule' },
  { path: 'dietas', loadChildren: './dietas/dietas.module#DietasModule' },
  {
    path: 'administracion',
    loadChildren: './administracion/administracion.module#AdministracionModule'
  },
  { path: 'acceso', component: AccesoUsuarioComponent },
  { path: 'acceso/:redirectUrl', component: AccesoUsuarioComponent },
  { path: '**', component: PaginaNoExisteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
