import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaAlimentosComponent } from './lista-alimentos/lista-alimentos.component';
import { InicioAlimentosComponent } from './inicio-alimentos/inicio-alimentos.component';
import { DetalleAlimentosComponent } from './detalle-alimentos/detalle-alimentos.component';

const routes: Routes = [
  { path: '', redirectTo: '/alimentos/inicio', pathMatch: 'full' },      
  { path: 'inicio', component: InicioAlimentosComponent },    
  { path: 'listar', component: ListaAlimentosComponent },    
  { path: 'detalle', component: DetalleAlimentosComponent },    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlimentosRoutingModule { }
