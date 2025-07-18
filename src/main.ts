import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideRouter, withEnabledBlockingInitialNavigation, withComponentInputBinding } from '@angular/router';
import { routes } from './app/app.routes';
import { RouterFeature, RouterFeatures } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation(),
      withComponentInputBinding(),
      withRouterConfig({
        scrollPositionRestoration: 'enabled', // <=== ESSENCIAL
        anchorScrolling: 'enabled',           // <=== ESSENCIAL
      })
    ),
    provideHttpClient() // ✅ ADICIONAR AQUI
  ]
});
function withRouterConfig(config: {
  scrollPositionRestoration: 'enabled' | 'disabled' | 'top';
  anchorScrolling: 'enabled' | 'disabled';
}): RouterFeature<any> {
  return {
    ɵkind: 'feature',
    ɵproviders: [
      {
        provide: 'ROUTER_SCROLL_POSITION_RESTORATION',
        useValue: config.scrollPositionRestoration,
      },
      {
        provide: 'ROUTER_ANCHOR_SCROLLING',
        useValue: config.anchorScrolling,
      },
    ],
  } as RouterFeature<any>;
}

