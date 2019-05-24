import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimentosRoutingModule } from './alimentos-routing.module';
import { ListaAlimentosComponent } from './lista-alimentos/lista-alimentos.component';
import { DetalleAlimentosComponent } from './detalle-alimentos/detalle-alimentos.component';
import { InicioAlimentosComponent } from './inicio-alimentos/inicio-alimentos.component';

@NgModule({
  declarations: [ListaAlimentosComponent, DetalleAlimentosComponent, InicioAlimentosComponent ],
  imports: [
    CommonModule,
    AlimentosRoutingModule
  ]
})
export class AlimentosModule { }
