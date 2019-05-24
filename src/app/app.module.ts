import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AlimentosModule } from './alimentos/alimentos.module';
import { DietasModule } from './dietas/dietas.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { AdministracionModule } from './administracion/administracion.module';
import { PaginaNoExisteComponent } from './pagina-no-existe/pagina-no-existe.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InicioComponent } from './inicio/inicio.component';
import { MenuNavegacionLateralComponent } from './menu-navegacion-lateral/menu-navegacion-lateral.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNoExisteComponent,
    InicioComponent,
    MenuNavegacionLateralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    //AlimentosModule,
    //DietasModule,
    //PacientesModule,
    //AdministracionModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
