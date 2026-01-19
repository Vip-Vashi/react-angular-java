import { Component, NgModule, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  standalone:false,
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.scss',
  providers: [HttpClientModule,UserService]
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];
  add:boolean=false;
  newUser: any = {  name: '', username: '',password:'' }; 
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = this.users.filter(user => user.id !== id);
    });
  }
  // addUser(user:any){
  //   this.userService.addUser(user).subscribe(() => {
  //     this.users.push(user);
    
  //     });
  // }
  onAdduserclick(){
    this.add=true;
  }
  addUser() {
    // this.newUser.id=""+this.users.length+1;
    console.log(this.newUser)
    this.userService.addUser(this.newUser).subscribe((newUser) => {
      this.users.push(newUser);
      this.newUser = { id: 0, name: '', username: '', password: '' }; // Reset form
    });
  }
}
