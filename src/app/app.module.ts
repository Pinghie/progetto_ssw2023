import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InserimentoComponent } from './inserimento/inserimento.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { GestioneComponent } from './ricerca/gestione/gestione.component';
import { servizioDatabase } from './app.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    InserimentoComponent,
    RicercaComponent,
    GestioneComponent,
  ],
  bootstrap: [AppComponent],
  providers: [servizioDatabase, RicercaComponent],
})
export class AppModule {}
