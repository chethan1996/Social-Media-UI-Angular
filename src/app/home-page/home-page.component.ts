import { Component, OnInit, Renderer2,ElementRef,ViewChild, HostListener, HostBinding } from '@angular/core';

import usersData from '../../assets/user.json';
import { UserDetailsService } from '../user-details.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  active:boolean[] = [true , false , false , false];
  title:string = 'Profile'; 
  singoutFormActive:boolean = false;
  users = usersData;
  // user;

  constructor(private userService : UserDetailsService) { 
    // this.user =  this.userService.getUserInfo(0);
    // console.log("From Hoem " + this.user.name)
  }

  ngOnInit(): void {
  }

  onActive(index:number , name:string){
    for ( let i=0 ; i<this.active.length ; i++){
      if(this.active[i]===true)
        this.active[i] = false;
    }
    this.active[index]= true;
    this.title = name;
  }

  onProfile(){
    this.singoutFormActive = !this.singoutFormActive;
    console.log(this.singoutFormActive)
  
  }
}
