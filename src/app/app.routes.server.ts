import { RenderMode, ServerRoute } from '@angular/ssr';

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
    path: '**',
    renderMode: Server
  }
];
