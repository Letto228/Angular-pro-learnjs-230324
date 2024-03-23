import { Component, Injector } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [
  //   {
  //     provide: 'name',
  //     useValue: 'AppComponent',
  //   }
  // ]
})
export class AppComponent {
  title = 'stand';

  constructor() {
    // const parentInjector = Injector.create({
    //   providers: [
    //     {
    //       provide: 'name',
    //       useFactory: () => {
    //         console.log('useFactory');

    //         return 'Egor';
    //       }
    //     }
    //   ]
    // });

    // class Test {
    //   constructor() {
    //     console.log('constructor');
    //   }

    //   initialize() {
    //     console.log('Init class');
    //   }
    // }

    // const injector = Injector.create({
    //   parent: parentInjector,
    //   providers: [
    //     {
    //       provide: 'name',
    //       // useValue: 'Alex',
    //       useClass: Test,
    //     },
    //     {
    //       provide: 'surname',
    //       useExisting: 'name',
    //       // useClass: Test,
    //     }
    //   ],
    // })

    // console.log('After');
    // console.log(injector.get('name') === injector.get('surname'));
    // // console.log(injector.get('name').initialize());
    // // console.log(injector.get('name').initialize());
    // // console.log(injector.get('name').initialize());
    // // console.log(injector.get('name').initialize());
    // // console.log(injector.get('name').initialize());
    // // console.log(injector.get('name').initialize());
    // // console.log(injector.get('name').initialize());
    // // console.log(injector.get('name').initialize());
    // console.log('Before');
  }
}
