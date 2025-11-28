import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ListPokemonInterface, PokemonInterface, Result} from '../interfaces';
import {map, Observable, of, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private pokemonsCache = new Map<string, PokemonInterface>();
  private http = inject(HttpClient)

  loadPage(page: number = 1): Observable<Result[]> {
    page = Math.max(0,page);
    if (page !== 0) --page;
    return this.http.get<ListPokemonInterface>(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`).pipe(
      map(response => response.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2),
        ...pokemon
      })))
    )
  }

  getPokemon(url: string){
    if (this.pokemonsCache.has(url)) return of(this.pokemonsCache.get(url));
    return this.http.get<PokemonInterface>(url).pipe(
      tap(response => this.pokemonsCache.set(url, response))
    )
  }

  getImagePokemonById(id: string){
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  }
}
