import { Component } from '@angular/core';

export class Libro {
  autore: string;
  titolo: string;
  posizione: string;
  prestato: string;

  constructor(autore, titolo, posizione) {
    this.autore = autore;
    this.titolo = titolo;
    this.posizione = posizione;
    this.prestato = '';
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  vista: string = 'home';

  cambiaView(direzione: string) {
    this.vista = direzione;
  }
}
