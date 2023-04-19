import { Component, OnInit } from '@angular/core';
import { servizioDatabase } from '../app.service';

@Component({
  selector: 'app-ricerca',
  templateUrl: './ricerca.component.html',
  styleUrls: ['./ricerca.component.css'],
})
export class RicercaComponent implements OnInit {
  constructor(private interazione: servizioDatabase) {}

  jsonData: string = 'aaa';

  onSearchChange(searchValue: string) {
    console.log(searchValue);
    this.estraiDati();
  }

  estraiDati() {
    const jsonData = this.interazione.getData().subscribe({
      next: (x: any) => console.log(x),
      error: (err) => console.error('aa'),
    });
  }

  ngOnInit() {
    console.log('aaa');
  }
}
