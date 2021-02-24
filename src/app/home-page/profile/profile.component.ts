import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../../user-details.service';

import usersData from '../../../assets/user.json';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // user = usersData;
  user:any;
  id:number;
  constructor( private userService : UserDetailsService , private route:ActivatedRoute) {
    // this.id = this.userService.getID();
    // this.user = this.userService.getUserInfo(this.id);

    this.route.params.subscribe(
      (params:Params) => {
        let i;
        i = this.route.snapshot.params['id'];
        this.user = this.userService.getUserInfo(i);
      }
    )
   }

  ngOnInit(): void {
    

  }

}
