import { Component, OnInit } from '@angular/core' 
import { Router } from '@angular/router' 
import { AutenticacionService } from '../../autenticacion/autenticacion/autenticacion.service'


@Component({
  selector: 'app-logout-usuarios',
  templateUrl: './logout-usuarios.component.html',
  styleUrls: ['./logout-usuarios.component.css']
})
export class LogoutUsuariosComponent implements OnInit {

  constructor(private router: Router, private authService: AutenticacionService) {}

  ngOnInit() {    
    this.authService.logout(); 
    this.router.navigate(['/']);  
  } 

}
