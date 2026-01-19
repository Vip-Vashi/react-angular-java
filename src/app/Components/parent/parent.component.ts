import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
  imports:[ChildComponent,FormsModule]
  
})

export class ParentComponent {
 
   parentMessage = 'heyy kidoo';

  // Data  from the child component
  childResponse: string = '';
   
  onChildResponse(response: string) {
    this.childResponse = response;
  }
}
