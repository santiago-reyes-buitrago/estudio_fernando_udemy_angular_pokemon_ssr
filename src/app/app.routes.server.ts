import { RenderMode, ServerRoute } from '@angular/ssr';
import {Result} from './pokemons/interfaces';

const TOTAL_POKEMONS = 50;
const TOTAL_PAGES = 30;

const {Server,Prerender,Client} = RenderMode

export const serverRoutes: ServerRoute[] = [
  {
    path: 'about',
    renderMode: Prerender
  },
  {
    path: 'contact',
    renderMode: Prerender
  },
  {
    path: 'princing',
    renderMode: Prerender
  },
  {
    path: 'pokemons/page/:page',
    renderMode: Prerender,
    async getPrerenderParams() {
      const pokemonsPages = Array.from({length: TOTAL_PAGES}, (_, i) => i + 1)
        // .map((id) => `/pokemons/page/${id}`)
      return pokemonsPages.map(item => ({page: `${item}`}))
    }
  },
  {
    path: 'pokemon/:id',
    renderMode: Prerender,
    async getPrerenderParams() {
      const pokemonsIds = Array.from({length: TOTAL_POKEMONS}, (_, i) => i + 1)
        // .map((id) => `/pokemon/${id}`)

      const {results: pokemonsNameList} = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMONS}`).then(res => res.json())
      return [...pokemonsIds,...pokemonsNameList.map((pokemon:Result) => pokemon.name)].map(id => ({
        id: `${id}`
      }))
    }
  },
  {
    path: '**',
    renderMode: Server
  }
];
