import { Component, inject } from '@angular/core';
import { myAnimationFirst } from './animations/first';
import { ActivatedRoute, ChildrenOutletContexts } from '@angular/router';
import { myAnimationLast } from './animations/last';
import { myAnimationSecond } from './animations/second';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [myAnimationSecond],
})
export class AppComponent {
  title = 'router-animations';

  private readonly childrenOutletContexts = inject(ChildrenOutletContexts);

  getRouterOutletState(): ActivatedRoute['component'] | undefined {
    return this.childrenOutletContexts.getContext('primary')?.route?.component
  }
}
