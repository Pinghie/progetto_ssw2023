import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { servizioDatabase } from '../app.service';

class Libro {
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
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
})
export class InserimentoComponent implements OnInit {
  constructor(
    private interazione: servizioDatabase,
    private app: AppComponent
  ) {}

  errore: string = '';

  inserimento(autore: string, titolo: string, posizione: string) {
    let archivio: Array<Object>;
    const libro = new Libro(autore, titolo, posizione);

    this.interazione.getData().subscribe({
      next: (x: string) => {
        archivio = JSON.parse(x);
        if (archivio.every((value) => value['posizione'] !== libro.posizione)) {
          archivio.push(libro);
          this.interazione.setData(JSON.stringify(archivio)).subscribe({
            next: () => (this.app.vista = 'home'),
            error: (err) =>
              console.log('Observer got an error: ' + JSON.stringify(err)),
          });
        } else this.errore = 'Esiste già un libro in questa posizione';
      },
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }

  ngOnInit() {}
}
