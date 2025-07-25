import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.css']
})
export class Hero implements AfterViewInit {
  @ViewChild('heroVideo') heroVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    const video = this.heroVideo?.nativeElement;

    if (video) {
      // Force play the video
      video.muted = true;
      video.loop = true;
      video.autoplay = true;

      video.play().catch(err => {
        console.warn('Autoplay blocked:', err);
        // Try again after a short delay
        setTimeout(() => {
          video.play().catch(e => console.warn('Second attempt failed:', e));
        }, 500);
      });
    }
  }
}
