import { Component, OnInit } from '@angular/core';
import { servizioDatabase } from '../app.service';

export class Archivio {
  lista: any;
}

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
})
export class RicercaComponent implements OnInit {
  constructor(private interazione: servizioDatabase) {}

  dati: any;
  nRisultati: Number = 0;
  vista = String;

  onSearchChange(stringaDigitata: string) {
    let listaRisultante: Array<Object>;
    listaRisultante = this.dati.filter((value) => {
      return value.titolo
        .concat(value.autore)
        .toLowerCase()
        .includes(stringaDigitata.toLowerCase());
    });
    this.nRisultati = listaRisultante.length;
    if(this.nRisultati === 1)
    {

    }
  }

  ngOnInit() {
    this.interazione.getData().subscribe({
      next: (x: any) => (this.dati = JSON.parse(x)),
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}
