import {Component, inject, OnInit, signal} from '@angular/core';
import {MetadataService} from '../../shared/services/metadata.service';
import {PokemonListComponent} from '../../pokemons/components/pokemon-list/pokemon-list.component';
import {
  PokemonListSkeletonComponent
} from '../../pokemons/components/pokemon-list-skeleton/pokemon-list-skeleton.component';
import {PokemonsService} from '../../pokemons/services/pokemons.service';
import {map, tap} from 'rxjs';
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
  query = toSignal<number>(this.activatedRouter.queryParamMap.pipe(map(params => params.get('page') ?? '1'),
    map(page => isNaN(+page) ? 1 : +page)))

  ngOnInit(): void {
    this.changeTitle()
    this.metadataService.setMetadata([
      {name: 'description', content: 'Pokemons Page'},
      {name: 'og-title', content: 'Pokemons Page'},
      {name: 'keywords', content: 'Pokemons,Page'}
    ])
    console.log(this.query())
    this.loadPokemon();
    // setTimeout(()=> {
    //   this.isLoading.set(false)
    // },5000)
  }


  loadPokemon(page: number = 0){
    const pageLoad = this.query()! + page;
    this.pokemonService.loadPage(pageLoad).pipe(
      tap(() => this.router.navigate([],{queryParams: {page: pageLoad}, relativeTo: this.activatedRouter})),
      tap(() => this.changeTitle())
    ).subscribe({
      next: this.pokemons.set,
    })
  }
  // ngOnDestroy(): void {
  //   this.$appState.unsubscribe()
  // }

  private changeTitle() {
    this.metadataService.setTitle(`Pokemons Page ${this.query()! + 1}`)
  }
}
