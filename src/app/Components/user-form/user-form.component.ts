import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  imports:[FormsModule,RouterLink]
})
export class UserFormComponent implements OnInit {
  user: any = { id: 0, name: '', email: '' }; // Adjust properties based on your User model
  isEdit: boolean = false;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.isEdit = true;
      this.userService.getUserById(+userId).subscribe(userData => {
        this.user = userData;
      });
    }
  }

  onSubmit() {
    if (this.isEdit) {
      this.userService.updateUser(this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    } else {
      this.userService.addUser(this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }
  canDeactivate(){
    return new Promise((resolve, reject) => {
      resolve(confirm('Do you want to go back ?'))
  })
  }
}