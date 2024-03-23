import { Component } from '@angular/core';

@Component({
  selector: 'cat',
  template: `
    <p>
      cat: <strong>{{phrase}}</strong>
    </p>
  `,
  providers: [
    {
      provide: 'name',
      useValue: 'CatComponent',
    }
  ]
})
export class CatComponent {
  phrase = 'meow'
}
