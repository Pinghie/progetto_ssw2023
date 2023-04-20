import { Component, OnInit } from '@angular/core';
import { RicercaComponent } from '../ricerca.component';
import { AppComponent } from '../../app.component';
import { servizioDatabase } from '../../app.service';

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

  risultato: object = this.ricercaComponent.listaRisultante[0];
  nuovoArchivio: Array<Object>;

  rimozione() {
    this.rimozioneOggetto();
    this.aggiornaArchivio();
  }

  restituzione() {
    this.rimozioneOggetto();
    this.risultato['prestato'] = '';
    console.log(this.risultato);
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
