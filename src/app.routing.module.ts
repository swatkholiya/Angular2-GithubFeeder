import { Component, OnInit , NgModule } from '@angular/core';
import { Injectable } from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { AboutUsComponent } from './app/about-us/about-us.component';
import { UserDetailsComponent } from './app/user-details/user-details.component';
import { UserRepositoryComponent } from './app/user-repository/user-repository.component';

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

