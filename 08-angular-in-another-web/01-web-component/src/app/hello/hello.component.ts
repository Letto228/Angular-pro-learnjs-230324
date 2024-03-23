import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HelloComponent {
  @Input() name: string | undefined;

  @Output() clicked = new EventEmitter<string>();
}
