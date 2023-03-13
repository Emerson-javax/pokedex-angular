import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent {

  public getAllPokemons: any;

  constructor(public pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.carregarPokemon.subscribe(
      res => {
        this.getAllPokemons = res.results;
        console.log(this.getAllPokemons)
      }
    )
  }

  public leadingZero( size: number ): string {
    if (size < 10) {
      return `0${size}`;
    }
    return size.toString();
  }

}
