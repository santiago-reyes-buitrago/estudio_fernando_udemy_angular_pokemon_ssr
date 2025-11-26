import {Component, computed, effect, inject, input} from '@angular/core';
import {Result} from '../../interfaces';
import {PokemonsService} from '../../services/pokemons.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'pokemon-card',
  imports: [
    AsyncPipe
  ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
})
export class PokemonCardComponent {
  private readonly pokemonService = inject(PokemonsService)
  pokemon = input.required<Result>();

  imagePokemon = computed(() => this.pokemonService.getImagePokemon(this.pokemon().url))

  // logEffect = effect(() => {
  //   console.log('pokemon: ', this.pokemon())
  // })
}
