import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatSortModule, MatPaginatorModule, MatProgressSpinnerModule } from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule, 
    MatProgressSpinnerModule
  ],
  exports: [
    MatTableModule, 
    MatSortModule, 
    MatPaginatorModule, 
    MatProgressSpinnerModule
  ]
})
export class AdministracionMaterialModule { }
