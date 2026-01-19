import { Component, NgModule } from '@angular/core';
import { Subscription, concat, interval, map, take } from 'rxjs';
import { CountdownService } from './countdown.service';
import { FormsModule, NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-countdown',
  imports:[FormsModule,NgIf],
  template: `
    <h2>Countdown Timer</h2>
    <input type="number" [(ngModel)]="seconds" placeholder="Enter seconds" />
    <button (click)="start()">Start Countdown</button>
    <p *ngIf="remainingTime >= 0">Time remaining: {{ remainingTime }} seconds</p>
    <p *ngIf="remainingTime < 0">Countdown Complete!</p>
  `,
})
export class CountdownComponent {
  seconds: number = 10; // Default countdown time
  remainingTime: number = 0; // Time remaining
  private countdownSubscription: Subscription | null = null;

  constructor(private countdownService: CountdownService) {

   //RXJS interval,take,concat
     const firstTimer = interval(1000).pipe(take(10),map(x=>x+10));
     const secondTimer = interval(3000).pipe(take(5),map(y=>y+200));
     const combinedTimer = concat(firstTimer,secondTimer);
     combinedTimer.subscribe(val=>console.log(val));
  }

  start() {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe(); // Unsubscribe from previous countdown
    }
    this.remainingTime = this.seconds; // Reset remaining time
    this.countdownSubscription = this.countdownService.startCountdown(this.seconds).subscribe({
      next: (time: number) => {       //Gets the time remaining from observable
        this.remainingTime = time; // Updating  remaining time for every second
      },
      complete: () => {
        this.remainingTime = -1; // Indicate countdown complete
      },
    });
  }
}