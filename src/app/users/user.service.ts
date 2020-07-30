import {Injectable} from '@angular/core';
import {IUser} from './iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = [
    {
      id: 1,
      name: 'nam',
      email: 'nam@gamil.com',
      group_id: 1
    },
    {
      id: 2,
      name: 'vinh',
      email: 'vinh@gamil.com',
      group_id: 1
    },
    {
      id: 4,
      name: 'duc',
      email: 'duc@gamil.com',
      group_id: 3
    }
  ];

  constructor() {
  }

  getAll(): IUser[] {
    return this.users;
  }

  add(user: IUser): void {
    this.users.push(user);
  }
}
