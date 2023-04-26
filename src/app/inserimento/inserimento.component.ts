import { Component } from '@angular/core';
import { AppComponent, Libro } from '../app.component';
import { servizioDatabase } from '../app.service';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
})
export class InserimentoComponent {
  constructor(
    private interazione: servizioDatabase,
    private app: AppComponent
  ) {}

  errore: string = '';

  inserimento(autore: string, titolo: string, posizione: string) {
    if (autore !== '' && titolo !== '' && posizione !== '') {
      let archivio: Array<Libro>;
      const libro = new Libro(autore, titolo, posizione);

      this.interazione.getData().subscribe({
        next: (stringaArchivio: string) => {
          archivio = JSON.parse(stringaArchivio);
          if (
            archivio.every((value) => value['posizione'] !== libro.posizione)
          ) {
            archivio.push(libro);
            this.interazione.setData(JSON.stringify(archivio)).subscribe({
              next: () => (this.app.vista = 'home'),
              error: (err) =>
                console.error(
                  "Errore nell'Observer SET in inserimento.component: " +
                    JSON.stringify(err)
                ),
            });
          } else this.errore = 'Esiste già un libro in questa posizione';
        },
        error: (err) =>
          console.error(
            "Errore nell'Observer GET in inserimento.component: " +
              JSON.stringify(err)
          ),
      });
    } else this.errore = 'Tutti i campi devono essere compilati';
  }
}
