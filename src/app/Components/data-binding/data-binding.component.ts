import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  name:string = 'John Doe';
  age:number = 30;
  isMarried:boolean= false;
  currentDate:Date=new Date();
  placeholder:string="Enter your name"
  state:string="state";
  display:string=""
  constructor(){

    console.log(this.currentDate);
    this.name="Kar🔥";
    console.log(this.name);
  }
  updateName(){
    
  this.name =  this.display;
    alert("Name Changed");
  }
  onStatechange(){
    console.log("State changed");
  }
}
