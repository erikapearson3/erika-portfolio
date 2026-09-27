import { Routes } from '@angular/router';

export const routes: Routes = [
  // This keeps the home layout loading by default
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ''
  }
];
