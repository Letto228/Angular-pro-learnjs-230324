import { Component, Inject, Injector, forwardRef } from '@angular/core';
import { Animal } from '../../animal';

@Component({
  selector: 'fox',
  template: `
    <p>
      fox: <strong>{{phrase}}</strong>
    </p>
  `,
  providers: [
    {
      provide: Animal,
      useExisting: FoxComponent,
    }
  ]
})
export class FoxComponent extends Animal {
  phrase = ''

  constructor(@Inject(Injector) injector: Injector) {
    super();

    setTimeout(() => {
      console.log(injector.get(FoxComponent));
      console.log(injector.get(FoxComponent) === injector.get(Animal));
      console.log(injector.get(Animal));
    }, 100);
  }

  say() {
    this.phrase = 'wow';
  }
}
