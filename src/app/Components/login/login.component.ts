
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule, FormsModule,RouterOutlet], // Import necessary modules
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onLoginSubmit() {
    // Fetch the list of users from the server
    this.http.get<any[]>('http://localhost:3000/Users').subscribe((users) => {
      // Check if the entered credentials match any user
      const user = users.find(
        (u) => u.email === this.username && u.password === this.password
      );
      

      if (user) {
        // Redirect to the user management page on successful login
        alert("Login Success !!🎉")
        this.router.navigate(['/crud']);
      } else {
        // Display an error message if credentials are invalid
        this.loginError = 'Invalid username or password. Please try again or register as a new user.';
      }
    });
  }

  redirectToAddUser() {
    // Redirect to the add user page
    this.router.navigate(['/crud']);
  }
}