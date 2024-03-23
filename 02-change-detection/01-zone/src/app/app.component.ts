import { ApplicationRef, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'zone';
  counter = 0;

  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  private readonly applicationRef = inject(ApplicationRef);

  onClick() {
    this.counter += 1;

    // this.changeDetectorRef.detectChanges();
    this.applicationRef.tick();

    console.log('Increment');
  }
}
