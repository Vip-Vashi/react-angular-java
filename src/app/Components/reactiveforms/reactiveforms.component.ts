import { NgIf, NgTemplateOutlet, TitleCasePipe } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-reactiveforms',
  imports: [ReactiveFormsModule,NgIf,FormsModule,RouterOutlet,RouterLink],
  templateUrl: './reactiveforms.component.html',
  styleUrl: './reactiveforms.component.css'
})
export class ReactiveformsComponent {

  user : FormGroup= new FormGroup({
    fname: new FormControl("",[Validators.required ,Validators.minLength(5)]),
    lname: new FormControl("",[Validators.required ,Validators.minLength(2)]),
    city: new FormControl("",[Validators.required]),
    state:new FormControl("Select State",Validators.required),
    zip:new FormControl("",[Validators.required]),
     email: new FormControl("",[Validators.required,Validators.email]),
     isAgreed:new FormControl(false,Validators.requiredTrue),
     password:new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern('[a-zA-Z ]*')]),
     confirmPassword:new FormControl("",[Validators.required,Validators.minLength(8)]),
},{validators:this.passwordMatchValidator()})
save(){
  console.log(this.user.value);
}
passwordMatchValidator(): (control: AbstractControl) => ValidationErrors | null {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password && confirmPassword && password !== confirmPassword
      ? { passwordMismatch: true }
      : null;
  };

}}
