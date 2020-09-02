import { Injectable } from '@angular/core';

import usersData from '../assets/user.json';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  users = usersData.users;

  constructor() { }

  getUserInfo(i:number){
    return (this.users[i])
  }
}
