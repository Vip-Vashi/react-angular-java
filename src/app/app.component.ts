import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from "./Components/data-binding/data-binding.component";
import { DirectivesTutorialComponent } from './Components/directives-tutorial/directives-tutorial.component';
import { CounterComponent } from "./Components/signals/signals.component";
import { ParentComponent } from "./Components/parent/parent.component";
import { ChildComponent } from "./Components/child/child.component";
import { NgIf } from '@angular/common';
import { LifecycleDemoComponent } from './Components/lifecycle/lifecycle.component';
import { ContentprojectionComponent } from './Components/contentprojection/contentprojection.component';
import { CrudComponent } from './Components/crud/crud.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, DirectivesTutorialComponent, CounterComponent, ParentComponent,NgIf,LifecycleDemoComponent,ContentprojectionComponent,CrudComponent],
  template:  `
  <h1>Angular Component Lifecycle Demo</h1>
  <button (click)="toggleComponent()">Toggle Component</button>
  <button (click)="updateInput()">Update Input</button>
  <app-lifecycle-demo *ngIf="showComponent" [inputValue]="inputValue"></app-lifecycle-demo>
`,
templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angulartutorials';
  showComponent: boolean = true;
  inputValue: string = 'Initial Value';

  toggleComponent(): void {
    this.showComponent = !this.showComponent;
  }

  updateInput(): void {
    this.inputValue = 'Updated Value';
  }
}
