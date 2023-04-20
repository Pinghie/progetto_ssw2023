import { Component, OnInit } from '@angular/core';
import { RicercaComponent } from '../ricerca.component';
import { AppComponent } from '../../app.component';
import { servizioDatabase } from '../../app.service';
import { Libro } from '../../inserimento/inserimento.component';

@Component({
  selector: 'app-gestione',
  templateUrl: './gestione.component.html',
  styleUrls: ['./gestione.component.css'],
})
export class GestioneComponent implements OnInit {
  constructor(
    private ricercaComponent: RicercaComponent,
    private interazione: servizioDatabase,
    private app: AppComponent
  ) {}

  risultato: Libro = this.ricercaComponent.listaRisultante[0];
  nuovoArchivio: Array<Libro>;

  rimozione() {
    this.rimozioneOggetto();
    this.aggiornaArchivio();
  }

  prestito(nome: string) {
    this.rimozioneOggetto();
    this.risultato['prestato'] = nome;
    this.nuovoArchivio.push(this.risultato);
    this.aggiornaArchivio();
  }

  restituzione() {
    this.rimozioneOggetto();
    this.risultato['prestato'] = '';
    this.nuovoArchivio.push(this.risultato);
    this.aggiornaArchivio();
  }

  private rimozioneOggetto() {
    this.nuovoArchivio = this.ricercaComponent.archivio.filter(
      (value) => value['posizione'] != this.risultato['posizione']
    );
  }

  private aggiornaArchivio() {
    this.interazione.setData(JSON.stringify(this.nuovoArchivio)).subscribe({
      next: () => (this.app.vista = 'home'),
      error: (err) =>
        console.log('Observer got an error: ' + JSON.stringify(err)),
    });
  }

  ngOnInit() {}
}
