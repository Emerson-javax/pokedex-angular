import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons = [];

  //const api = 'https://pokeapi.co/api/v2/pokemon?limit=151'

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons()
  }

  public async carregarPokemons() {
    const requisicao = await this.httpClient
    .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
    .toPromise();

    this.pokemons = requisicao.results;

    //const api = this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151');
    //this.pokemons = await firstValueFrom(api); 
    //console.log(`primeiro pokemon: ${api}`)
  }
}