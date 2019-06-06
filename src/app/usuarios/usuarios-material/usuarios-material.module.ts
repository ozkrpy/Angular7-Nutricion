import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule, MatAutocompleteModule, MatDatepickerModule, MatDividerModule, MatLineModule, MatNativeDateModule, MatRadioModule, MatSelectModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatAutocompleteModule, 
    MatDatepickerModule, 
    MatDividerModule, 
    MatLineModule, 
    MatNativeDateModule, 
    MatRadioModule,
    MatSelectModule,
    MatStepperModule
  ], 
  exports: [
    CommonModule,
    MatAutocompleteModule, 
    MatDatepickerModule, 
    MatDividerModule, 
    MatLineModule, 
    MatNativeDateModule, 
    MatRadioModule,
    MatSelectModule,
    MatStepperModule
  ]
})
export class UsuariosMaterialModule { }
