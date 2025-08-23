import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class Signals {

  normalCounter = 0;
  counter = signal(0);

  // constructor will run when the component is created
  constructor() {
    this.counter.set(6);

    // setTimeout(() => {
    //   this.normalCounter = 50;
    //   console.log('counter value after 2 seconds:', this.normalCounter);
    // }, 2000);

    // every time the signal value changes, this effect will run
    effect(() => {
      console.log('Counter value changed:', this.counter());
    });
  }

  // method to increment the counter signal
  increment() {
    this.counter.update(value => value + 1);
  }


}
