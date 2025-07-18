import { Component } from '@angular/core';
import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Services } from '../services/services';
import { Gallery } from '../gallery/gallery';
import { ContactComponent} from '../contact/contact';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbar, Hero, About, Services, Gallery, ContactComponent, Footer],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-services></app-services>
    <app-gallery></app-gallery>
    <app-contact></app-contact>
    <app-footer></app-footer>
  `
})
export class Home {}