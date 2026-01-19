// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'John ', email: 'john@example.com' },
    { id: 2, name: 'Jane ', email: 'jane@example.com' },
  ];

  getUsers(): Observable<User[]> {
    return of(this.users);  // Simulating an API call
  }

  getUserById(id: number): Observable<User | undefined> {
    const user = this.users.find(u => u.id === id);
    return of(user);  // Simulating an API call
  }
  addUser(user:User):Observable<User>{
    user.id=this.users.length+1;
    this.users.push(user);
    return of(user);
    
  }

  updateUser(user: User): Observable<User> {
    const index = this.users.findIndex(u => u.id === user.id);
    if (index !== -1) {
      this.users[index] = user;
      }
      return of(user);
  }
}