import { Component, OnInit } from '@angular/core';
import { servizioDatabase } from '../app.service';

export class Archivio {
  lista: Array<Object>;
  /*
  cercaLibro(stringa) {
    return this.lista.filter((value) => {
      return value.titolo
        .concat(value.autore)
        .toLowerCase()
        .includes(stringa.toLowerCase());
    });
  }
  */
}

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
})
export class RicercaComponent implements OnInit {
  constructor(private interazione: servizioDatabase) {}

  dati: Archivio;

  onSearchChange(searchValue: string) {
    console.log(searchValue);
    this.estraiDati();
  }

  estraiDati() {}

  ngOnInit() {
    this.interazione.getData().subscribe({
      next: (x: any) => (this.dati = JSON.parse(x)),
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
    console.log(this.dati);
  }
}
