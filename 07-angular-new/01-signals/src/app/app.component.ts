import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'signals';

  get name(): string {
    console.log('Egor');
    
    return 'Egor';
  }

  // readonly count = signal(0, {equal: });
  readonly count = signal(0);

  constructor() {
    this.count.set(3);
    // this.count.update(value => value + 2);

    // this.count.mutate(value => {});

    // setTimeout(() => {
    //   this.count.set(5);
    // }, 3000)

    // setInterval(() => {
    //   console.log(this.count());
    // }, 1000)

    // const showCount = signal(true);

    // const doubleCount = computed(() => {
    //   console.log('computed calculate');
      
    //   return showCount() ? `The count is ${this.count()}` : `Nothing`;
    //   // return this.count() * 2
    // });

    // // showCount.set(true);

    // console.log(doubleCount());
    // console.log(doubleCount());
    // console.log(doubleCount());
    // console.log(doubleCount());
    // console.log(doubleCount());
    // console.log(doubleCount());
    // console.log(doubleCount());

    // setTimeout(() => {
    //   console.log(doubleCount());
    //   console.log(doubleCount());
    //   console.log(doubleCount());
    //   console.log(doubleCount());
    //   console.log(doubleCount());
    //   console.log(doubleCount());
    //   console.log(doubleCount());
    // }, 4000);

    const effectInstance = effect(onCleanup => {
      console.log(`The current count: ${this.count()}`)

      const id = setTimeout(() => {}, 200000);

      onCleanup(() => {
        clearTimeout(id);
      });
    })

    setTimeout(() => {
      this.count.set(5);
    }, 2000);

    setTimeout(() => {
      this.count.set(10);
    }, 5000);
  }
}
