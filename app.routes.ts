import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sing',
    pathMatch: 'full',
  },
  {
    path: 'sing-in',
    loadComponent: () => import('./sing-in/sing-in.page').then( m => m.SingInPage)
  },
];
