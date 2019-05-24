import { Component } from '@angular/core';
import { HttpClientJsonpModule } from '@angular/common/http';
import { MediaObserver } from '@angular/flex-layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppNutricion';
  constructor(public media: MediaObserver) {}
}
