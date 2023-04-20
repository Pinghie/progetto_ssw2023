import { Component, OnInit } from '@angular/core';
import { servizioDatabase } from '../app.service';
import { Libro } from '../inserimento/inserimento.component';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
})
export class RicercaComponent implements OnInit {
  constructor(private interazione: servizioDatabase) {}

  archivio: Array<Libro>;
  nRisultati: Number = 0;
  listaRisultante: Array<Libro>;

  onSearchChange(stringaDigitata: string) {
    this.listaRisultante = this.archivio.filter((value) => {
      return value['titolo']
        .concat(value['autore'])
        .toLowerCase()
        .includes(stringaDigitata.toLowerCase());
    });
    this.nRisultati = this.listaRisultante.length;
  }

  ngOnInit() {
    this.interazione.getData().subscribe({
      next: (x: string) => (this.archivio = JSON.parse(x)),
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}
