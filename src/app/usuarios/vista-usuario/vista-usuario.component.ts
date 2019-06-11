import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { IUser, Usuario } from '../usuario';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vista-usuario',
  templateUrl: './vista-usuario.component.html',
  styleUrls: ['./vista-usuario.component.css']
})
export class VistaUsuarioComponent implements OnChanges, OnInit {
  @Input() user: IUser 

  currentUser = new Usuario()

  constructor(private route: ActivatedRoute) {}

  ngOnChanges() {    
    if (this.user) {      
      this.currentUser = Usuario.BuildUser(this.user)    
    }  
  } 

  ngOnInit() {
    if (this.route.snapshot && this.route.snapshot.data['user']) {      
      this.currentUser = Usuario.BuildUser(this.route.snapshot.data['user'])      
      this.currentUser.dateOfBirth = Date.now() // for data mocking purposes only    
    } 
  }

  get editMode() {
    return !this.user
  }

}
