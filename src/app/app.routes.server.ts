import { RenderMode, ServerRoute } from '@angular/ssr';

const {Server,Prerender} = RenderMode

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
    path: 'pokemons',
    renderMode: Server
  },
  {
    path: '**',
    renderMode: Server
  }
];
