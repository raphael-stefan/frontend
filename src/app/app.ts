import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Gallery } from './components/gallery/gallery';
import { Services } from './components/services/services';
import { ContactComponent } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    Hero,
    About,
    Gallery,
    Services,
    ContactComponent,
    Footer,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}