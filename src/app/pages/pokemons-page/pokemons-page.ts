import {Component, effect, inject, OnInit, signal} from '@angular/core';
import {MetadataService} from '../../shared/services/metadata.service';
import {PokemonListComponent} from '../../pokemons/components/pokemon-list/pokemon-list.component';
import {
  PokemonListSkeletonComponent
} from '../../pokemons/components/pokemon-list-skeleton/pokemon-list-skeleton.component';
import {PokemonsService} from '../../pokemons/services/pokemons.service';
import {map} from 'rxjs';
import {Result} from '../../pokemons/interfaces';
import {ActivatedRoute, Router} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'pokemons-page',
  imports: [
    PokemonListComponent,
    PokemonListSkeletonComponent
  ],
  templateUrl: './pokemons-page.html',
  styleUrl: './pokemons-page.css',
  standalone: true
})

export default class PokemonsPage implements OnInit{
  private pokemonService = inject(PokemonsService)
  private metadataService = inject(MetadataService)
  private activatedRouter = inject(ActivatedRoute)
  private router = inject(Router)

  // private appRef = inject(ApplicationRef)
  // private $appState = this.appRef.isStable.subscribe(stable => {
  //   console.log({stable})
  // })
  pokemons = signal<Result[]>([]);
  query = toSignal<number>(this.activatedRouter.params.pipe(map(params => params['page'] ?? '1'),
    map(page => isNaN(+page) ? 1 : +page)))

  ngOnInit(): void {

    this.metadataService.setMetadata([
      {name: 'description', content: 'Pokemons Page'},
      {name: 'og-title', content: 'Pokemons Page'},
      {name: 'keywords', content: 'Pokemons,Page'}
    ])
  }

  loadPokemon(page: number = 0){
    const pageLoad = this.query()! + page;
    this.pokemonService.loadPage(pageLoad).subscribe({
      next: this.pokemons.set,
    })
  }

  navigatePokemons(page: number = 0){
    const pageLoad = this.query()! + page;
    this.router.navigate(['pokemons','page',pageLoad])
  }
  // ngOnDestroy(): void {
  //   this.$appState.unsubscribe()

  // }

  private changeTitle() {
    this.metadataService.setTitle(`Pokemons Page ${this.query()!}`)
  }

  watchEffects = effect(() => {
    this.changeTitle()
    this.loadPokemon();
  })
}
