import { Component, OnInit } from '@angular/core';
import {IUser} from '../iuser';
import {IGroup} from '../../groups/igroup';
import {GroupService} from '../../groups/group.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  title_page = 'Users'
  users: IUser[] = [];

  groups: IGroup[] = []

  userFilter = [];

  constructor(private groupService: GroupService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.userFilter = this.userService.getAll();
    this.groups = this.groupService.getAll();
  }

  search(event) {
    let keyword = event;
    this.userFilter = (keyword) ? this.filerByKeyword(keyword) : this.userService.getAll();
  }

  filerByKeyword(keyword) {
    return this.userService.getAll().filter(user => {
      return user.name.indexOf(keyword) != -1;
    })
  }

  delete(id) {
    let userDelete=[];
    this.userFilter.map(user =>{
      if (user.id != id){
        userDelete.push(user);
      }
    });
    this.userFilter=userDelete;
    return this.userFilter;
  }

}
