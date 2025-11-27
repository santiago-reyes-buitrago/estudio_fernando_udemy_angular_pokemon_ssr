import {Component, computed, inject, input, signal} from '@angular/core';
import {Result} from '../../interfaces';
import {PokemonsService} from '../../services/pokemons.service';
import {AsyncPipe} from '@angular/common';
import {map, tap} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'pokemon-card',
  imports: [
    AsyncPipe
  ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
  standalone: true
})
export class PokemonCardComponent {
  private readonly pokemonService = inject(PokemonsService)
  private readonly router = inject(Router)
  id = signal<number|null>(null);
  pokemon = input.required<Result>();

  imagePokemon = computed(() => this.pokemonService.getPokemon(this.pokemon().url).pipe(
    tap(response => this.id.set(response!.id)),
    map(response => response!.sprites.front_default ?? '')
  ))

  // logEffect = effect(() => {
  //   console.log('pokemon: ', this.pokemon())
  // })
  protected redirectToPokemon() {
    this.router.navigate(['/pokemon', this.id()])
  }
}
