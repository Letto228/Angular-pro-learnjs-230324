import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


// platformBrowserDynamic().bootstrapModule(AppModule, {ngZone: 'noop'})
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
