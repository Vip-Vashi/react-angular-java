import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private apiUrl = 'http://localhost:3000/users';
  private apiUrl = 'https://3.91.226.121:8080/users';

  constructor(private http: HttpClient) {}
   
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  // addUser(user:any):Observable<any>{
  //   user.id=this.getUsers.length+1+"";
  //   this.http.post<void>(`${this.apiUrl}`,user)
  //   return of(user);
    
  // }
  addUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }
}
