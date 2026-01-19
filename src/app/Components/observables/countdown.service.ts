import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountdownService {

  constructor() {}

  // Custom Observable that emits countdown values
  startCountdown(seconds: number): Observable<number> {
    return new Observable<number>((observer) => {
      let counter = seconds;
   //For every 1 second it returns the counter value and decrements it by 1 untill it becomes 0
      const intervalId = setInterval(() => {   
        if (counter > 0) {
          observer.next(counter);
          counter--;
        } else {
          observer.complete();
          clearInterval(intervalId);
        }
      }, 1000); 
      
      // Cleanup logic when unsubscribing
      return () => {
        clearInterval(intervalId);
      };
    });
  }
}