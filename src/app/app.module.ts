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
import { AccesoUsuarioComponent } from './acceso-usuario/acceso-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from './autenticacion/auth-http-interceptor';
import { DialogoComponent } from './common/dialogo/dialogo.component';
import { UiService } from './common/ui.service';
import { AuthGuardGuard } from './autenticacion/auth-guard.guard';


@NgModule({
  declarations: [
    AppComponent,
    PaginaNoExisteComponent,
    InicioComponent,
    MenuNavegacionLateralComponent,
    AyudaComponent,
    AccesoUsuarioComponent,
    DialogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AutenticacionService,  
    {
      provide: HTTP_INTERCEPTORS,      
      useClass: AuthHttpInterceptor,      
      multi: true,    
    },
    UiService,
    AuthGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
