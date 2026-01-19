// src/app/components/user-detail/user-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { User } from '../../models/user';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  imports:[FormsModule,NgIf, RouterModule]
})
export class UserDetailComponent implements OnInit {
  user?: User;

  constructor(private route: ActivatedRoute,
    private router: Router,

    ) {}


  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }
  back(){
    this.router.navigateByUrl("");
  }
}