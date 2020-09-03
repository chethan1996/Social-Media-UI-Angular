import { Component, OnInit } from '@angular/core';

import users from "../../assets/user.json";
import { UserDetailsService } from '../user-details.service'


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  usersData:any = users;

  constructor(private userService: UserDetailsService) { 
    // console.log(this.userService.getUserInfo(0))
  }

  ngOnInit(): void {

  }

  onProfile(i:number){
    this.userService.storeID(i);
  }


}
