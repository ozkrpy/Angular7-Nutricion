import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PaginaNoExisteComponent } from './pagina-no-existe/pagina-no-existe.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InicioComponent } from './inicio/inicio.component';
import { MenuNavegacionLateralComponent } from './menu-navegacion-lateral/menu-navegacion-lateral.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { AutenticacionService } from './autenticacion/autenticacion/autenticacion.service';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNoExisteComponent,
    InicioComponent,
    MenuNavegacionLateralComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [AutenticacionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
