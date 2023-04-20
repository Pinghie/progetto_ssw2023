import { Component, OnInit } from '@angular/core';
import { RicercaComponent } from '../ricerca.component';
import { servizioDatabase } from '../../app.service';

@Component({
  selector: 'app-gestione',
  templateUrl: './gestione.component.html',
  styleUrls: ['./gestione.component.css'],
})
export class GestioneComponent implements OnInit {
  constructor(
    private ricercaComponent: RicercaComponent,
    private interazione: servizioDatabase
  ) {}

  risultato = this.ricercaComponent.listaRisultante[0];

  rimozione() {
    let nuovoArchivio = this.ricercaComponent.archivio.filter(
      (value) => value['posizione'] != this.risultato['posizione']
    );
    this.interazione.setData(JSON.stringify(nuovoArchivio)).subscribe({
      next: () => console.log('andata'),
      error: (err) =>
        console.log('Observer got an error: ' + JSON.stringify(err)),
    });
  }

  ngOnInit() {
    console.log(this.ricercaComponent.archivio);
  }
}
