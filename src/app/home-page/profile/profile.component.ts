import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/user-details.service';

import usersData from '../../../assets/user.json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = usersData;
  // user:any;
  constructor( private userService : UserDetailsService) {
    // this.user = this.userService.getUserInfo(0);
   }

  ngOnInit(): void {
    console.log("from init" + this.user.name)

  }

}
