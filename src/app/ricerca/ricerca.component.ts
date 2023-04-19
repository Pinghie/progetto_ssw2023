import { Component, OnInit } from '@angular/core';
import { servizioDatabase } from '../app.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
})
export class RicercaComponent implements OnInit {
  /*
  constructor(private interazione: servizioDatabase) {}

  jsonData: string = '';

  estraiDati() {
    const jsonData = this.interazione.getData();
  }
  */
  ngOnInit() {}
}
