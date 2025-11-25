import {Component, inject, OnInit, signal} from '@angular/core';
import {MetadataService} from '../../shared/services/metadata.service';
import {PokemonListComponent} from '../../pokemons/components/pokemon-list/pokemon-list.component';
import {
  PokemonListSkeletonComponent
} from '../../pokemons/components/pokemon-list-skeleton/pokemon-list-skeleton.component';

@Component({
  selector: 'pokemons-page',
  imports: [
    PokemonListComponent,
    PokemonListSkeletonComponent
  ],
  templateUrl: './pokemons-page.html',
  styleUrl: './pokemons-page.css',
})
export default class PokemonsPage implements OnInit{
  private metadataService = inject(MetadataService)
  isLoading = signal(true)

  ngOnInit(): void {
    this.metadataService.setTitle('Pokemons Page')
    this.metadataService.setMetadata([
      {name: 'description', content: 'Pokemons Page'},
      {name: 'og-title', content: 'Pokemons Page'},
      {name: 'keywords', content: 'Pokemons,Page'}
    ])
    setTimeout(()=> {
      this.isLoading.set(false)
    },5000)
  }

}
