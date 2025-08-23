import { Component, computed, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.html',
  styleUrl: './linked-signal.scss'
})
export class LinkedSignal {

  quantitySignal = signal(1);
  price = 10;

  // computed is used to create a derived signal that automatically updates when its dependencies change
  // total = computed(() => this.quantitySignal() * this.price);

  // linkedSignal is used to create a signal that is linked to other signals and automatically updates when they change
  // total = linkedSignal(() => this.quantitySignal() * this.price);

  // Using the equal function to prevent unnecessary updates if the computed value hasn't changed
  total = linkedSignal({
    source: this.quantitySignal,
    computation: () => this.quantitySignal() * this.price,
    equal: (a, b) => a === b
  });

  calculate() {
    this.quantitySignal.set(2);
  }
}
