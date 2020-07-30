import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from './users/user-list/user-list.component';
import {GroupListComponent} from './groups/group-list/group-list.component';
import {UserAddComponent} from './users/user-add/user-add.component';
import {UserEditComponent} from './users/user-edit/user-edit.component';


const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'users/add', component: UserAddComponent},
  {path: 'groups', component: GroupListComponent},
  {path: 'users/edit/:id', component: UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
