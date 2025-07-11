import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  {
  path: 'booking',
  loadComponent: () => import('./components/booking/booking').then(m => m.Booking)
},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];