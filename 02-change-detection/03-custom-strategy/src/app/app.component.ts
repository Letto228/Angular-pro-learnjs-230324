import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent {
  title = 'change-detector';

  counter = 0;

  constructor() {
    setInterval(() => {
      this.counter += 1;
    }, 1000);

    inject(ChangeDetectorRef).detach();
  }
}
