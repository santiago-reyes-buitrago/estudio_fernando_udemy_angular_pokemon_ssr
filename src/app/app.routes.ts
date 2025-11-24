import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./pages/about-page/about-page')
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-page/contact-page')
  },
  {
    path: 'princing',
    loadComponent: () => import('./pages/pricing-page/pricing-page')
  },
  {
    path: 'pokemons',
    loadComponent: () => import('./pages/pokemons-page/pokemons-page')
  },
  {
    path: '**',
    redirectTo: () => 'about'
  }
];
