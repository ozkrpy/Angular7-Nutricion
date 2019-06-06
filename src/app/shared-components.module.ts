import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from './app-material.module';
import { VistaUsuarioComponent } from './usuarios/vista-usuario/vista-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppMaterialModule
  ],
  declarations: [VistaUsuarioComponent],
  exports: [VistaUsuarioComponent],
})
export class SharedComponentsModule { }
