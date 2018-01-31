import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'mozo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'mozo';
}
