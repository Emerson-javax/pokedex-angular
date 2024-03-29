import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

import { HttpClientModule } from '@angular/common/http';

import { PokemonService } from './services/pokemon.service';
import { PokeSearchComponent } from './shared/poke-search/poke-search.component';
import { ModalComponent } from './shared/modal/modal.component';


@NgModule({
  declarations: [AppComponent, PokemonListComponent, PokeSearchComponent, ModalComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}