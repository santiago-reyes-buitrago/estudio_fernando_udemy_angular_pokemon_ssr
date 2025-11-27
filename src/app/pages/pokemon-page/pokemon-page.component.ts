import {Component, inject, OnInit, signal} from '@angular/core';
import {PokemonsService} from '../../pokemons/services/pokemons.service';
import {ActivatedRoute} from '@angular/router';
import {PokemonInterface} from '../../pokemons/interfaces';
import {MetadataService} from '../../shared/services/metadata.service';
import {tap} from 'rxjs';

@Component({
  selector: 'pokemon-page',
  imports: [
  ],
  templateUrl: './pokemon-page.component.html',
  styleUrl: './pokemon-page.component.css',
  standalone: true
})
export default class PokemonPageComponent implements OnInit {
  private readonly pokemonService = inject(PokemonsService)
  private readonly metaDataService = inject(MetadataService)
  private readonly activatedRouter = inject(ActivatedRoute)
  params = this.activatedRouter.snapshot.params;
  pokemon = signal<PokemonInterface | null>(null)

  ngOnInit(): void {
    this.pokemonService.getPokemon(`https://pokeapi.co/api/v2/pokemon/${this.params['id'] ?? 0}/`).pipe(
      tap((response) => {
        const metaDataPokemon = {
          title: `#${response!.id} - ${response!.name}`,
          description: `Pagina del pokemon ${response!.name}`,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response!.id}.png`
        }
        this.metaDataService.setTitle(metaDataPokemon.title)
        this.metaDataService.setMetadata([
          {name: 'description', content: metaDataPokemon.description},
          {name: 'og:title', content: metaDataPokemon.title},
          {name: 'og:description', content: metaDataPokemon.description},
          {name: 'og:description', content: metaDataPokemon.description},
          {name: 'og:image', content: metaDataPokemon.image},
        ])
      })
    ).subscribe({
      next: (response) => this.pokemon.set(response!)
    })
  }

}
