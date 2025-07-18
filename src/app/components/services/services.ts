import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, take } from 'rxjs/operators';

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrls: ['./services.css'],
})
export class Services implements OnDestroy {
  private navigationSubscription: any;

  constructor(private router: Router) {
    // Inscreva-se para eventos de navegação
    this.navigationSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Força o recarregamento se vier da mesma página
      if (this.router.url.includes('/services')) {
        window.location.reload();
      }
    });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  navigateWithFragment(fragment: string) {
    if (this.router.url.includes('/booking')) {
      // Força um recarregamento completo se já estiver na página de booking
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/booking'], { fragment, queryParamsHandling: 'preserve' });
      });
    } else {
      // Navega normalmente para booking com fragmento
      this.router.navigate(['/booking'], { fragment });
    }
  }
}