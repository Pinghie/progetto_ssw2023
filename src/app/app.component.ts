import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  vista: string = 'home';

  tastoPremuto(direzione: string) {
    this.vista = direzione;
  }
}
