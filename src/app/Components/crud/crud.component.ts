import { CommonModule } from '@angular/common';
import { Component, OnInit ,inject} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Import MatSnackBarModule
import { SnackbarService } from './snackbar-service.service';

@Component({
  selector: 'app-crud',
  standalone:true,
  imports: [MatPaginatorModule,MatTableModule,CommonModule,FormsModule,RouterLink,MatSnackBarModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent implements OnInit{
  // http = inject(HttpClient);
  title = 'usermanagement';
  userobj: User = new User();
  userList: User[] = [];
  showUserForm: boolean = false;
  isEditMode: boolean = false;
  message:string="";
  constructor(
    private router: Router,
    private http: HttpClient,
    private snackbar : SnackbarService
    ) {}
  ngOnInit(): void {
    this.getUserList();
  }
  showSnackbar(message: string) {
    this.snackbar.open(message, 'Dismiss');
  }
  getUserList() {
    this.http.get<User[]>("http://localhost:3000/Users").subscribe((result: User[]) => {
      this.userList = result;
    });
  }

  addUser() {
    this.userobj = new User();
    this.isEditMode = false;
    this.showUserForm = true;
  }
 ids : string="@rlz";
  onSubmit() {
    if (!this.isEditMode) {
      this.userobj.id= this.ids+this.userList.length+1 ;
      this.http.post<User>("http://localhost:3000/Users", this.userobj).subscribe((result: User) => {
        this.userList.push(result);
        this.closeUserForm();
      });
    } else {
      this.http.put<User>(`http://localhost:3000/Users/${this.userobj.id}`, this.userobj).subscribe((result: User) => {
      const index = this.userList.findIndex(user => user.id === result.id);
      if (index !== -1) {
        this.userList[index] = result;
      }
      this.closeUserForm();
      this.showSnackbar(this.message="Details Updated ");
    });
    }
  }

  closeUserForm() {
    this.showUserForm = false;
    this.isEditMode = false;
    this.userobj = new User();
  }

  editUser(data: User) {
    this.userobj = { ...data };
    this.isEditMode = true;
    this.showUserForm = true;
  }


  deleteUser(id?: any) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.http.delete(`http://localhost:3000/Users/${id}`).subscribe(() => {
        this.userList = this.userList.filter(user => user.id !== id); 
        this.showSnackbar("User Deleted !!")
        // Remove the user from the list
      });
  }
}
back(){
  this.router.navigateByUrl("*");
}

canDeactivate(){
  return new Promise((resolve, reject) => {
    resolve(confirm('Do you want to go back ?'))
})
}
}

export class User {
  id?: any;
  name: string;
  age: number;
  city: string;
  country: string;
  email: string;
  password: string;

  constructor() {
    this.id = '';
    this.name = '';
    this.age = 0;
    this.city = '';
    this.country = '';
    this.email = '';
    this.password = '';
  }
}
