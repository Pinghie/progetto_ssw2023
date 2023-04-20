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
    const libro = { autore: autore, titolo: titolo, posizione: posizione, prestato:"" };
    /*
    let aggiunta =
      ',{"autore":"' +
      autore +
      '","titolo":"' +
      titolo +
      '","posizione":"' +
      posizione +
      '","prestato":""}]';
      */
    console.log(libro);

    this.interazione.getData().subscribe({
      next: (x: any) => {
        x = JSON.parse(x);
        console.log(x);
        console.log(x.push(libro)); //controllare che libro.posizione non sia già dentro x
        console.log(x);
        console.log(JSON.stringify(x));
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
