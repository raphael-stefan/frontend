import { Routes } from '@angular/router';

// Importações dos componentes
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Gallery } from './components/gallery/gallery';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';


export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'services', component: Services },
  { path: 'gallery', component: Gallery },
  { path: 'contact', component: Contact },
  { path: 'footer', component: Footer },
  { path: '**', redirectTo: '', pathMatch: 'full' } // fallback para rota inválida
];
