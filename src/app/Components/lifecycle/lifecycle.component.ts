import { NgIf } from '@angular/common';
import { Component, Input, OnChanges, OnInit, DoCheck, AfterContentInit, SimpleChanges,AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-demo',
  imports:[NgIf],
//   template: `

//     <div *ngIf="showComponent" >
//     <h2>Lifecycle Demo Component</h2>
//     <p>Input Value: {{ input }}</p>
//     <p>Changes Detected: {{ changesDetected }}</p>
//     <button (click)="toggleComponent()">Toggle Component</button>
//     <button (click)="updateInput()">Update Input</button>

// </div>
//   `,
  templateUrl:'./lifecycle.component.html'
})
// export class LifecycleDemoComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
//   // @Input() inputValue: string = '';
//   changesDetected: string = 'No changes yet';
//   showComponent: boolean = true;
//   input: string = 'Initial Value';

//   toggleComponent(): void {
//     this.showComponent = !this.showComponent;
//   }

//   updateInput(): void {
//     this.input = 'Updated Value';
//   }
//   // ngOnChanges
//   ngOnChanges(): void {
//     this.changesDetected = 'ngOnChanges called!';
//     console.log('ngOnChanges called!');
//   }

//   // ngOnInit
//   ngOnInit(): void {
//     console.log('ngOnInit called!');
//   }

//   // ngDoCheck
//   ngDoCheck(): void {
//     console.log('ngDoCheck called!');
//   }

//   // ngAfterContentInit
//   ngAfterContentInit(): void {
//     console.log('ngAfterContentInit called!');
//   }

//   // ngAfterContentChecked
//   ngAfterContentChecked(): void {
//     console.log('ngAfterContentChecked called!');
//   }

//   // ngAfterViewInit
//   ngAfterViewInit(): void {
//     console.log('ngAfterViewInit called!');
//   }

//   // ngAfterViewChecked
//   ngAfterViewChecked(): void {
//     console.log('ngAfterViewChecked called!');
//   }

//   // ngOnDestroy
//   ngOnDestroy(): void {
//     console.log('ngOnDestroy called!');
//   }

 
// }
export class LifecycleDemoComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterViewInit {
  
  // title = 'Lifecycle Demo';
  counter = 0;
  intervalId: any;  // To hold the interval ID
  showComponent:boolean=true;
  constructor() {
    console.log('Constructor: Component is being constructed!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Changes detected', changes);
  }

  ngOnInit() {
    console.log('ngOnInit: Component initialized!');
    this.startCounter();
  }

  ngDoCheck() {
    console.log('ngDoCheck: Change detection cycle!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit: Content projected into the component!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit: View initialized!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy: Component is about to be destroyed!');
    this.stopCounter();
  }

  startCounter() {
    this.intervalId=setInterval(() => {
      this.counter++;
    }, 1000);
  }

  stopCounter() {

    // Logic to stop the counter or any other cleanup can be added here
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.counter=0;

       // Resetting the intervalId
    }
  }
}