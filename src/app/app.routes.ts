import { Routes } from '@angular/router';
import { CounterComponent } from './Components/signals/signals.component';
import { DirectivesTutorialComponent } from './Components/directives-tutorial/directives-tutorial.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import { ParentComponent } from './Components/parent/parent.component';
import { ChildComponent } from './Components/child/child.component';
import { LifecycleDemoComponent } from './Components/lifecycle/lifecycle.component';
import { ContentprojectionComponent } from './Components/contentprojection/contentprojection.component';
import { CrudComponent } from './Components/crud/crud.component';
import { LoginComponent } from './Components/login/login.component';
import { PipesComponent } from './Components/pipes/pipes.component';
import { TemplateformsComponent } from './Components/templateforms/templateforms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveformsComponent } from './Components/reactiveforms/reactiveforms.component';
import {
  TestCanActivate,
  TestCanActivateChild,
  TestCanDeActivate,
} from './Components/guards';
import { UserListComponent } from './Components/user-list/user-list.component';
import { UserDetailComponent } from './Components/user-detail/user-detail.component';
import { UserResolver } from './services/user.resolver';
import { outputAst } from '@angular/compiler';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { CountdownComponent } from './Components/observables/observables.component';

export const routes: Routes = [
  { path: '*', redirectTo: 'login', pathMatch: 'full' },
  { path: 'signals', component: CounterComponent },
  { path: 'directives', component: DirectivesTutorialComponent },
  { path: 'databinding', component: DataBindingComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'lifecycle', component: LifecycleDemoComponent },
  { path: 'contentproj', component: ContentprojectionComponent },
  {
    path: 'crud',
    component: CrudComponent,
    canActivate: [TestCanActivate],
    canDeactivate: [TestCanDeActivate],
  },
  { path: 'login', component: LoginComponent },
  { path: 'pipe', component: PipesComponent },
  { path: 'template', component: TemplateformsComponent },
  { path: 'reactive', component: ReactiveformsComponent },
  {
    path: 'forms',
    component: ReactiveformsComponent,
    children: [{ path: 'template', component: TemplateformsComponent }],
    canActivateChild: [TestCanActivateChild],
  },

  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {
    path: 'users',
    component: UserListComponent,
    // children:[
    //   { path: 'new',
    //     loadComponent:()=>import('./Components/user-form/user-form.component').then(f=>f.UserFormComponent),
    //     canActivateChild:[TestCanActivateChild]

    // }
    // ]
  },
  {
    path: 'users/:id',
    loadComponent: () =>
      import('./Components/user-detail/user-detail.component').then(
        (c) => c.UserDetailComponent
      ),
    // component: UserDetailComponent,
    resolve: { user: UserResolver },
  },
  {
    path: 'users/:id/edit',
    component: UserFormComponent,
    canDeactivate: [TestCanDeActivate],
  }, // Edit user route

  {
    path: 'new',
    component: UserFormComponent,
    canDeactivate: [TestCanDeActivate],
  }, // Add new user route

  {
    path:'obs',
    component:CountdownComponent,
  }
];
