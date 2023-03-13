import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons = [];

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100';

  constructor(private httpClient: HttpClient) {
  
  }

  get carregarPokemon():Observable<any> {
    return this.httpClient.get<any>(this.url).pipe(
      tap( res => res ),
      tap( res => {
        res.results.map( (resPokemons: any) => {
          this.apiGetPokemon(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );
        })
      })
    )
  }
    public apiGetPokemon( url: string ):Observable<any>{
      return this.httpClient.get<any>( url ).pipe(
        map(
          res => res
        )
      )
    }

  //public async carregarPokemons() {
    //const requisicao = await this.httpClient
    //.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151')
    //.toPromise();

    //this.pokemons = requisicao.results;

    //const api = this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151');
    //this.pokemons = await firstValueFrom(api); 
    //console.log(`primeiro pokemon: ${api}`)
  }
