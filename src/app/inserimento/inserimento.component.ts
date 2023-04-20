import { Component, OnInit } from '@angular/core';
import { servizioDatabase } from '../app.service';

@Component({
  selector: 'app-inserimento',
  templateUrl: './inserimento.component.html',
  styleUrls: ['./inserimento.component.css'],
})
export class InserimentoComponent implements OnInit {
  constructor(private interazione: servizioDatabase) {}

  inserimento(autore: string, titolo: string, posizione: string) {
    //console.log(autore, titolo, posizione);
    let aggiunta =
      ',{"autore":"' +
      autore +
      '","titolo":"' +
      titolo +
      '","posizione":"' +
      posizione +
      '","prestato":""}]';
    //console.log(aggiunta);

    this.interazione.getData().subscribe({
      next: (x: any) => {
        x = x.substring(0, x.length - 1) + aggiunta;
        console.log(x);
        console.log(JSON.parse(x));
        console.log(JSON.stringify(JSON.parse(x)));
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
