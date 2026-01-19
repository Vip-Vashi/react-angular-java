import { CommonModule } from '@angular/common';
import { Component, EventEmitter ,Input,Output} from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() messageFromParent: string = '';
  @Output() responseToParent = new EventEmitter<string>();

  responseMessage: string = 'hii dada';

  sendResponseToParent() {
    this.responseToParent.emit(this.responseMessage);
  }
}
