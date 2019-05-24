import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-no-existe',
  template: `
    <p>      
      El sitio se encuentra aun en construccion. Vuelva al <a routerLink="/inicio">inicio</a>.    
    </p>
  `,
  styles: []
})
export class PaginaNoExisteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
