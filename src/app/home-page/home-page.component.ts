import { Component, OnInit, Renderer2,ElementRef,ViewChild, HostListener, HostBinding } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// import usersData from '../../assets/user.json';
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
  user:any;
  users:any;
  i:number;
  prevUserID:number;
  nextUserID:number;
  nextUserID2: number;
  chatOpen:boolean = false;

  constructor(private userService : UserDetailsService , private route:ActivatedRoute , private router:Router) { 
    this.route.params.subscribe(
      (params:Params) => {
        this.i = + this.route.snapshot.params['id'];
        this.user = this.userService.getUserInfo(this.i);
        this.users = this.userService.getUsers();
        this.prevUserID = this.i;
        
      }
    )

    if(this.i >= 7){
      this.nextUserID = 0;
      this.nextUserID2 = 2;
    }else {
      this.nextUserID =  this.i + 1;
      this.nextUserID2 =  this.i + 2;
    }
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

  onActiveProfile(index:number , name:string){
    for ( let i=0 ; i<this.active.length ; i++){
      if(this.active[i]===true)
        this.active[i] = false;
    }
    this.active[index]= true;
    this.title = name;
    this.router.navigate(['home',this.i,'profile',this.i]);

  }

  onProfile(){
    this.singoutFormActive = !this.singoutFormActive;
  
  }

  onNextUser1(){
    let id = this.nextUserID;
    this.nextUserID = this.prevUserID;
    this.router.navigate(['home',id , 'profile',id ]);
  }

  onNextUser2(){
    let id = this.nextUserID2;
    this.nextUserID2 = this.nextUserID;
    this.nextUserID = this.prevUserID; 
    this.router.navigate(['home',id , 'profile',id ]);
  }

  onChat(){
    this.chatOpen = true;
  }
}
