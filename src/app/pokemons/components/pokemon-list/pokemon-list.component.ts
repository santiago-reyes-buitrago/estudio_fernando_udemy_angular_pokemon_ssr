import {Component, input} from '@angular/core';
import {PokemonCardComponent} from '../pokemon-card/pokemon-card.component';
import {Result} from '../../interfaces';

@Component({
  selector: 'pokemon-list',
  imports: [
    PokemonCardComponent,
  ],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
  standalone: true
})
export class PokemonListComponent {

  pokemons = input.required<Result[]>();
}
