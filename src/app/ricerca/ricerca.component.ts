import { Component, OnInit } from '@angular/core';
import { servizioDatabase } from '../app.service';
import { Libro } from '../app.component';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
})
export class RicercaComponent implements OnInit {
  constructor(private interazione: servizioDatabase) {}

  archivio: Array<Libro>;
  nRisultati: Number;
  listaRisultante: Array<Libro>;

  tastoDigitato(stringaDigitata: string) {
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
      next: (stringaArchivio: string) => {
        this.archivio = JSON.parse(stringaArchivio);
        this.nRisultati = this.archivio.length;
      },
      error: (err) =>
        console.error(
          "Errore nell'Observer in ricerca.component: " + JSON.stringify(err)
        ),
    });
  }
}
