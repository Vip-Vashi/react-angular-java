import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-tutorial',
  imports: [NgFor,NgIf,NgClass],
  templateUrl: './directives-tutorial.component.html',
  styleUrl: './directives-tutorial.component.css'
})
export class DirectivesTutorialComponent {
cityList : string[]=["Madurai","Chennai","Virdhunagar","Cbe"];
switchTheme:string="white";
dark:string="dark";
theme:string="row bg-white text-dark"
onChange(){
  this.switchTheme = this.switchTheme === "white" ? "dark"  : "white";
  if(this.switchTheme=="dark"){
   this.theme="bg-dark text-white";
  }
  else{
    this.theme="bg-white text-dark";
  }
}
}
