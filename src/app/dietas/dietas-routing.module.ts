import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioDietasComponent } from './inicio-dietas/inicio-dietas.component';
import { NuevaDietaComponent } from './nueva-dieta/nueva-dieta.component';

const routes: Routes = [
  { path: '', redirectTo: '/dietas/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioDietasComponent },
  { path: 'nuevo', component: NuevaDietaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DietasRoutingModule {}
