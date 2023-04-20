import { Component, OnInit } from '@angular/core';
import { servizioDatabase } from '../app.service';

class Libro {
  autore: string;
  titolo: string;
  posizione: string;
  prestato: string;

  constructor(autore, titolo, posizione) {
    this.autore = autore;
    this.titolo = titolo;
    this.posizione = posizione;
    this.prestato = '';
  }
}

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
})
export class InserimentoComponent implements OnInit {
  constructor(private interazione: servizioDatabase) {}

  inserimento(autore: string, titolo: string, posizione: string) {
    //console.log(autore, titolo, posizione);
    let archivio: Array<Object>;
    const libro = new Libro(autore, titolo, posizione);

    console.log(libro);

    this.interazione.getData().subscribe({
      next: (x: string) => {
        archivio = JSON.parse(x);
        let posizioneOccupata = archivio.every((value) => {
          return value['posizione'] == libro.posizione;
        });
        console.log(posizioneOccupata);
        archivio.push(libro); //controllare che libro.posizione non sia già dentro x

        console.log(JSON.stringify(archivio));
        /*this.interazione.setData(x).subscribe({
          next: (y: any) => console.log('andata'),
          error: (err) =>
            console.log('1Observer got an error: ' + JSON.stringify(err)),
        });*/
      },
      error: (err) =>
        console.error('2Observer got an error: ' + JSON.stringify(err)),
    });
  }

  ngOnInit() {}
}
