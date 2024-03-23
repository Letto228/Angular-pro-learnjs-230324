import { AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class FirstPageComponent implements DoCheck, AfterViewChecked {

  counter = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    setInterval(() => {
      this.counter += 1;
    }, 1000);
  }

  ngDoCheck() {
    console.log('DoCheck');

    if (this.counter % 10 === 0) {
      this.changeDetectorRef.detectChanges();
    }
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  detach() {
    this.changeDetectorRef.detach()
  }

  detectChanges() {
    this.changeDetectorRef.detectChanges();
  }

  reattach() {
    this.changeDetectorRef.reattach();
  }

}
