import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private apiUrl = 'http://localhost:3000/users';
  private apiUrl = 'https://3.91.226.121:8080/users';

  usersList:any[]=[];
  constructor(private http: HttpClient) {}
  private users = [
    { username: 'admin', password: 'admin' },
    { username: 'user1', password: 'user1' },
  ];

  authenticate(username: string, password: string): boolean {
    this.http.get<any[]>(this.apiUrl).subscribe(data=>
      {
        this.usersList=data;
      })
    const user = this.usersList.find(u => u.username === username && u.password === password);
    return user !== undefined;
  }
}
