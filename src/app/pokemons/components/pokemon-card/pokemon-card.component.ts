import {Component, computed, inject, input} from '@angular/core';
import {Result} from '../../interfaces';
import {PokemonsService} from '../../services/pokemons.service';
import {Router} from '@angular/router';

@Component({
  selector: 'pokemon-card',
  imports: [
  ],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css',
  standalone: true
})
export class PokemonCardComponent {
  private readonly pokemonService = inject(PokemonsService)
  private readonly router = inject(Router)
  pokemon = input.required<Result>();

  imagePokemon = computed(() => this.pokemonService.getImagePokemonById(this.pokemon().id!))

  // logEffect = effect(() => {
  //   console.log('pokemon: ', this.pokemon())
  // })

  protected redirectToPokemon() {
    this.router.navigate(['/pokemon', this.pokemon().name!])
  }
}
