import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClientJsonpModule } from '@angular/common/http';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material';
import { AutenticacionService } from './autenticacion/autenticacion/autenticacion.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') public sideNav: MatSidenav
  
  title = 'AppNutricion';
  constructor(public authService: AutenticacionService, public media: MediaObserver) {}

  ngOnInit() {    
    this.authService.authStatus.subscribe(authStatus => {
      if (!authStatus.isAuthenticated) {
        this.sideNav.close()
      }
    })
  }
}
