import { Injectable, Component, Inject } from '@angular/core' 
import {  MatSnackBar,  MatSnackBarConfig,  MatDialog,  MatDialogConfig, } from '@angular/material' 
import { Observable } from 'rxjs'
import { DialogoComponent } from './dialogo/dialogo.component';


@Injectable()
export class UiService {

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) {}
  showToast(message: string, action = 'Close', config?: MatSnackBarConfig) {    
    this.snackBar.open(message, action,config || {duration: 7000})  
  } 

  showDialog(title: string,
             content: string,
             okText = 'OK',
             cancelText?: string,customConfig?: MatDialogConfig  ): Observable<Boolean> {    
    const dialogRef = this.dialog.open(DialogoComponent,
                                       customConfig || {width: '300px',
                                                        data: { title: title, 
                                                          content: content, 
                                                          okText: okText, 
                                                          cancelText: cancelText 
                                                        },
                                      }
      )
    return dialogRef.afterClosed()  
  } 
}
