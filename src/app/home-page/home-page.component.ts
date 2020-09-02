import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  active:boolean[] = [true , false , false , false];
  constructor() { }

  ngOnInit(): void {
  }

  onActive(index:number){
    for ( let i=0 ; i<this.active.length ; i++){
      if(this.active[i]===true)
        this.active[i] = false;
    }
    this.active[index]= true;
  }
}
