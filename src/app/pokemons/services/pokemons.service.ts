import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ListPokemonInterface, PokemonInterface} from '../interfaces';
import {map, of, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  private images = new Map<string, string>();
  private http = inject(HttpClient)

  loadPage(page: number = 1) {
    page = Math.max(0,page);
    if (page !== 0) --page;
    console.log(page)
    return this.http.get<ListPokemonInterface>(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`).pipe(
      map(response => response.results)
    )
  }

  getImagePokemon(url: string){
    if (this.images.has(url)) return of(this.images.get(url));
    return this.http.get<PokemonInterface>(url).pipe(
      map(response => response.sprites.front_default),
      tap(image => this.images.set(url, image))
    )
  }
}
