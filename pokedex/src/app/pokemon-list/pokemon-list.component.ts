import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent {

  public apiError: boolean = false;

  private setAllPokemons: any;
  public getAllPokemons: any;

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.carregarPokemon.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error => {
        this.apiError = true;
      }
    );
  }

  public leadingZero( size: number ): string {
    if (size < 10) {
      return `0${size}`;
    }
    return size.toString();
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any ) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.getAllPokemons = filter;
  }


}
