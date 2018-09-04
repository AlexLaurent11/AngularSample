import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
import { ListComponent } from '../list/list.component';
import { CommentsComponent } from '../comments/comments.component';

const appRoutes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: "register",
    component: RegisterComponent,
    data: { title: 'Register' }
  },
  {
    path: "list",
    component: ListComponent,
    data: { title: 'List' }
  },
  {
    path: "comments",
    component: CommentsComponent,
    data: { title: 'Comments' }
  },
  {
    path: "",
    redirectTo: "/login",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
