import { Injectable, linkedSignal } from '@angular/core';
import { signal, computed, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  // Create a Signal for a counter
  counter = signal(0);
  // Create a computed Signal that depends on the counter
  doubleCounter = computed(() => this.counter() * 2); //signal
  double = this.counter()*2; //normal variable

  sum = linkedSignal( computed(()=> this.counter()+this.doubleCounter()));
  
  constructor() {
    // Create an effect that logs the counter value whenever it changes
    effect(() => {
      console.log('Counter changed:', this.counter());
      console.log("dbl",this.double)
      console.log("Sum is ",this.sum());
    });
  }

  // Method to increment the counter
  increment() {
    this.counter.update(value => value + 1);
  }

  // Method to reset the counter
  reset() {
    this.counter.set(0);
    
  }
}