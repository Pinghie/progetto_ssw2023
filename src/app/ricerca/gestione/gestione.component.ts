import { Component } from '@angular/core';
import { RicercaComponent } from '../ricerca.component';
import { AppComponent } from '../../app.component';
import { servizioDatabase } from '../../app.service';
import { Libro } from '../../app.component';

@Component({
  selector: 'app-gestione',
  templateUrl: './gestione.component.html',
})
export class GestioneComponent {
  constructor(
    private ricercaComponent: RicercaComponent,
    private interazione: servizioDatabase,
    private app: AppComponent
  ) {}

  risultato: Libro = this.ricercaComponent.listaRisultante[0];
  nuovoArchivio: Array<Libro>;

  rimozione() {
    this.nuovoArchivio = this.ricercaComponent.archivio.filter(
      (value) => value['posizione'] != this.risultato['posizione']
    );
    this.aggiornaArchivio();
  }

  prestito(nome: string) {
    let index = this.ricercaComponent.archivio.findIndex(
      (value) => this.risultato['posizione'] === value['posizione']
    );
    this.nuovoArchivio = this.ricercaComponent.archivio;
    this.nuovoArchivio[index].prestato = nome;
    this.aggiornaArchivio();
  }

  private aggiornaArchivio() {
    this.interazione.setData(JSON.stringify(this.nuovoArchivio)).subscribe({
      next: () => (this.app.vista = 'home'),
      error: (err) =>
        console.error(
          "Errore nell'Observer in gestione.component: " + JSON.stringify(err)
        ),
    });
  }
}
