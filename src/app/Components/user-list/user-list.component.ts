// src/app/components/user-list/user-list.component.ts
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from "../user-form/user-form.component";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  imports: [CommonModule, NgIf, FormsModule, RouterLink, UserFormComponent]
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  searchTerm: string = '';
  filteredUsers = this.users;

  constructor(private userService: UserService, private router: Router,private activatedRoute: ActivatedRoute) {}
  isAdd:boolean= false;
  onSearch(event: any) {
    this.searchTerm = event.target.value.toLowerCase();
    this.filteredUsers = this.users.filter(user => user.name.toLowerCase().includes(this.searchTerm));
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { search: this.searchTerm },
      queryParamsHandling: 'merge', // Preserve existing params
    });
  }
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  viewUser(id: number): void {
    this.router.navigate(['/users', id]);
  }

  addUser(user:User){
    this.userService.addUser(user);
  }
  canDeactivate(){
    return new Promise((resolve, reject) => {
      resolve(confirm('Do you want to go back ?'))
  })
  }

  // isAdduser(){
  //   this.isAdd=true;
  // }
}