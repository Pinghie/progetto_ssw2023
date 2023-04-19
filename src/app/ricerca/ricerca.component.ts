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

  onSearchChange(stringaDigitata: string) {
    console.log(
      this.dati.filter((value) => {
        return value.titolo
          .concat(value.autore)
          .toLowerCase()
          .includes(stringaDigitata.toLowerCase());
      })
    );
  }

  ngOnInit() {
    this.interazione.getData().subscribe({
      next: (x: any) => (this.dati = JSON.parse(x)),
      error: (err) =>
        console.error('Observer got an error: ' + JSON.stringify(err)),
    });
  }
}
