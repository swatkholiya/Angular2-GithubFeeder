import { Component, OnInit , NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRepositoryComponent } from './user-repository/user-repository.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Aboutus', component: AboutUsComponent },
  { path: 'UserDetails/:name' , component : UserDetailsComponent} ,
  { path: 'UserRepo/:name' , component : UserRepositoryComponent },  
];

 @NgModule({
   imports: [RouterModule.forRoot(appRoutes)],
   exports: [RouterModule],
 })

export class AppRoutingModule {}

