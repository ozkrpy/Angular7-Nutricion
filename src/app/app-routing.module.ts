import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaNoExisteComponent } from './pagina-no-existe/pagina-no-existe.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [    
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },  
  { path: 'inicio', component:  InicioComponent}, 
  { path: 'alimentos', loadChildren: './alimentos/alimentos.module#AlimentosModule'},
  { path: '**', component: PaginaNoExisteComponent } 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
