import { Inject, Injector, NgModule, inject } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { HelloComponent } from './hello/hello.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [BrowserModule],
})
export class AppModule {
  ngDoBootstrap() {}

  constructor(@Inject(Injector) injector: Injector) {
    console.log(injector);

    const helloElementConstructor = createCustomElement(HelloComponent, {injector});

    customElements.define('app-hello', helloElementConstructor)
  }
}
