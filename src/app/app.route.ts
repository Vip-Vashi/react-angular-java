import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
 
  {
    path: 'login',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://mfa-login.s3.us-east-1.amazonaws.com/remoteEntry.js',
        exposedModule: './LoginModule',
      }).then((m) => m.LoginModule),
  },
  {
    path: 'user-management',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'https://mfa-userlist.s3.us-east-1.amazonaws.com/remoteEntry.js',
        exposedModule: './UserManagementModule',
      }).then((m) => m.UserManagementModule),
  },
];

@NgModule({

  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
})
export class AppModule {}
