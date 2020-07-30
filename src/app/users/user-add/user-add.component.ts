import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {IGroup} from '../../groups/igroup';
import {GroupService} from '../../groups/group.service';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  addUserForm: FormGroup;
  groups: IGroup[];

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private groupService: GroupService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      group_id: ['']
    });
    this.groups = this.groupService.getAll();
  }

  submit() {
    let data = this.addUserForm.value;
    data.group_id = Number(data.group_id);
    this.userService.add(data);
    this.router.navigate(['users']);
    console.log(this.userService.getAll());
  }

  get name() {
    return this.addUserForm.get('name');
  }

  get email() {
    return this.addUserForm.get('email');
  }

}
