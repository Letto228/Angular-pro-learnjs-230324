import { AfterViewChecked, ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewChecked {
  title = 'check-no-changes';
  counter = 0;

  // private readonly сhangeDetectorRef = inject(ChangeDetectorRef);

  constructor(private readonly сhangeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewChecked(): void {
    // setTimeout(() => {
    //   this.counter += 1;

    //   console.log('Increment', this.counter);
    // }, 0)

    this.counter += 1;

    // this.сhangeDetectorRef.detectChanges();
    
    console.log('Increment', this.counter);
  }

  onLogTitle() {
    console.log(this.counter);
  }
}
