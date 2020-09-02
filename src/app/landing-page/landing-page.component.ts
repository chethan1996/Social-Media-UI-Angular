import { Component, OnInit } from '@angular/core';
import users from "../../assets/user.json";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  usersData:any = users;

  constructor() { }

  ngOnInit(): void {
    console.log(this.usersData)
    console.log(this.usersData.users[0].name)

  }


}
