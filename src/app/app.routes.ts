import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';


export const routes: Routes = [
  { path: '', component: Home },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: 'about', component: About },

];