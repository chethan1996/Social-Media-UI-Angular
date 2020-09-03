import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './home-page/profile/profile.component';
import { PostsComponent } from './home-page/posts/posts.component';
import { GalaryComponent } from './home-page/galary/galary.component';
import { TodoComponent } from './home-page/todo/todo.component';


const routes: Routes = [
  { path:"", component:LandingPageComponent},
  { path:"home/:id" , component: HomePageComponent , children:[
    { path:'profile/:id' , component:ProfileComponent },
    { path:'posts' , component:PostsComponent },
    { path:'galary' , component:GalaryComponent },
    { path:'todo' , component:TodoComponent }
  ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
