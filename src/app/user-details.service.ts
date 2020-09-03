import { Injectable } from '@angular/core';

import usersData from '../assets/user.json';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  public id:number; 
  private users = usersData.users;

  constructor() { }

  getUserInfo(i:number){
    return (this.users[i])
  }

  storeID(i:number){
    this.id = i;
  }

  getID(){
   return this.id;
  }

  getUsers(){
    return this.users;
  }
}
