import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserManagementComponent } from './user-management.component';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';

const router: Routes = [{ path: '', component: UserManagementComponent }];
@NgModule({
  declarations: [UserManagementComponent],
  imports: [CommonModule, RouterModule.forChild(router),HttpClientModule,FormsModule],
  exports: [UserManagementComponent],
})
export class UserManagementModule {}
