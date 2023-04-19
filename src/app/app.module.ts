import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InserimentoComponent } from './inserimento/inserimento.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, InserimentoComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
