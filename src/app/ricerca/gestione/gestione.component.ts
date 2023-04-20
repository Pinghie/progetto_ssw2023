import { Component, OnInit } from '@angular/core';
import { RicercaComponent } from '../ricerca.component';

@Component({
  selector: 'app-gestione',
  templateUrl: './gestione.component.html',
  styleUrls: ['./gestione.component.css'],
})
export class GestioneComponent implements OnInit {
  constructor(private ricercaComponent: RicercaComponent) {}

  risultato = this.ricercaComponent.listaRisultante[0];

  rimozione() {
    console.log('AAA');
    this.risultato['posizione'];
    console.log(this.ricercaComponent.archivio);
    let nuovoArchivio = this.ricercaComponent.archivio.filter(
      (value) => value['posizione'] != this.risultato['posizione']
    );
    console.log(nuovoArchivio);
  }

  ngOnInit() {
    console.log(this.ricercaComponent.archivio);
  }
}
