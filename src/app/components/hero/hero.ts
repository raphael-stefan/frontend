import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero implements AfterViewInit {

  ngAfterViewInit(): void {
    const video = document.querySelector<HTMLVideoElement>('video');
    
    if (video) {
      video.play().catch(err => {
        console.warn('Autoplay blocked:', err);
      });
    }
  }
}
