import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaNoExisteComponent } from './pagina-no-existe/pagina-no-existe.component';
import { InicioComponent } from './inicio/inicio.component';
import { AdministracionModule } from './administracion/administracion.module';
import { AyudaComponent } from './ayuda/ayuda.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'ayuda', component: AyudaComponent },
  { path: 'alimentos', loadChildren: './alimentos/alimentos.module#AlimentosModule' },
  { path: 'pacientes', loadChildren: './pacientes/pacientes.module#PacientesModule' },
  { path: 'dietas', loadChildren: './dietas/dietas.module#DietasModule' },
  {
    path: 'administracion',
    loadChildren: './administracion/administracion.module#AdministracionModule'
  },
  { path: '**', component: PaginaNoExisteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
