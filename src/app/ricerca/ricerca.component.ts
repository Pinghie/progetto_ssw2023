import { Component, OnInit } from '@angular/core';
import { servizioDatabase } from '../app.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
})
export class RicercaComponent implements OnInit {
  constructor(private interazione: servizioDatabase) {}

  archivio: Array<Object>;
  nRisultati: Number = 0;
  listaRisultante: Array<Object>;

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
