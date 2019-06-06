import { Component, Input, OnChanges } from '@angular/core';
import { IUser, Usuario } from '../usuario';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent implements OnChanges {
  @Input() user: IUser 

  currentUser = new Usuario()

  constructor() {}
  
  ngOnChanges() {    
    if (this.user) {      
      this.currentUser = Usuario.BuildUser(this.user)    
    }  
  } 

}
