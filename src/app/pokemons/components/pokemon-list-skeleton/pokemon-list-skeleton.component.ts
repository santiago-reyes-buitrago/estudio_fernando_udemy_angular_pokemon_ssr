import { Component } from '@angular/core';

@Component({
  selector: 'pokemon-list-skeleton',
  imports: [],
  templateUrl: './pokemon-list-skeleton.component.html',
  styleUrl: './pokemon-list-skeleton.component.css',
  standalone: true
})
export class PokemonListSkeletonComponent {

  protected readonly Array = Array;
}
