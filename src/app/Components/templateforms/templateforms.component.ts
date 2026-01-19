import { NgIf, NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { Component,  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateforms',
  imports: [FormsModule,NgIf,TitleCasePipe,NgTemplateOutlet],
  standalone:true,
  templateUrl: './templateforms.component.html',
  styleUrl: './templateforms.component.css'
})
export class TemplateformsComponent {

onSubmit(){
  const formval = this.user;
  console.log(formval);
  if(! this.user.errors)
  {
    alert("Form Submitted Successfully!!");

  }
  else{
    alert("Please fill all the fields!!");
  }
}
  user:any={
    fname:'',
    lname:'',
    email:'',
    city:'',
    state:'',
    zip:'',
    isAgreed:false
  }

}
