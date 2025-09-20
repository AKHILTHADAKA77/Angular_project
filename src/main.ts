import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import 'zone.js';  // ✅ keep this

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
    // ✅ Do NOT provide 'noop' if using zone.js
  ]
});
