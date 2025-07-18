import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-booking',
  standalone: true,
  templateUrl: './booking.html',
  styleUrls: ['./booking.css']
})
export class Booking implements AfterViewInit, OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    // Trata fragmento inicial
    this.handleFragment();

    // Observa mudanças de rota (incluindo fragmentos)
    this.router.events.pipe(
      takeUntil(this.destroy$),
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.handleFragment();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
private handleFragment(): void {
  const fragment = this.route.snapshot.fragment;
  if (fragment) {
    setTimeout(() => {
      const element = document.getElementById(fragment);
      if (element) {
        // Tente até 3 vezes com intervalos crescentes se não funcionar
        let attempts = 0;
        const tryScroll = () => {
          if (element.offsetParent) {
            const header = document.querySelector('header');
            const headerHeight = header ? header.offsetHeight : 0;
            const y = element.getBoundingClientRect().top + window.scrollY - headerHeight;
            window.scrollTo({ top: y, behavior: 'smooth' });
          } else if (attempts < 3) {
            attempts++;
            setTimeout(tryScroll, 100 * attempts);
          }
        };
        
        tryScroll();
      }
    }, 300); // Aumente o tempo para 300ms
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
}