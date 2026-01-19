import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  providers: [HttpClientModule],
  styleUrls:['./login.component.scss'],
  animations: [
    trigger('flyInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ])
  ]
})
export class LoginComponent {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective | undefined;
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router,private toastr:ToastrService) {}
  ngOnInit() {
    this.toastr.overlayContainer = this.toastContainer;
  }
  login() {
    if (this.authService.authenticate(this.username, this.password)) {
      alert('Login Success !!')
      this.router.navigate(['/user-management']);
    } else {
      alert('Login failed!');
    }
  }
}
