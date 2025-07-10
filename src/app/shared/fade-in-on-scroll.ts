import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[fadeInOnScroll]',
  standalone: true
})
export class FadeInOnScroll {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100;

    if (isVisible) {
      this.renderer.addClass(this.el.nativeElement, 'visible');
    }
  }

  ngOnInit() {
    this.onScroll();
  }
}
