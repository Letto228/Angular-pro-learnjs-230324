import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers: [
  //   {
  //     provide: 'name',
  //     useValue: 'HomeComponent',
  //   }
  // ]
})
export class HomeComponent {
  constructor(@Inject('name') name: string) {
    console.log(name);
  }
}
