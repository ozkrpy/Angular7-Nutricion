import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DietasRoutingModule } from './dietas-routing.module';
import { InicioDietasComponent } from './inicio-dietas/inicio-dietas.component';
import { NuevaDietaComponent } from './nueva-dieta/nueva-dieta.component';

@NgModule({
  declarations: [InicioDietasComponent, NuevaDietaComponent],
  imports: [
    CommonModule,
    DietasRoutingModule
  ]
})
export class DietasModule { }
