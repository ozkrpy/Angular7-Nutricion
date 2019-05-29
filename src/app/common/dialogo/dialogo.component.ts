import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogoComponent, Boolean>,    
              @Inject(MAT_DIALOG_DATA) public data: any  ) {} 

  ngOnInit() {
  }
  
}
