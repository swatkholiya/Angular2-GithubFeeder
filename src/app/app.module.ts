import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GithubUserService } from './github-user.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserRepositoryComponent } from './user-repository/user-repository.component';
import {DefinedConstants} from './app.defined.constants';
import { AppRoutingModule} from './app.routing.module';


@NgModule({
  declarations: [ 
    AppComponent, HomeComponent, AboutUsComponent, AboutUsComponent,UserDetailsComponent, UserRepositoryComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     AppRoutingModule
    ],
  providers: [GithubUserService , DefinedConstants],
  bootstrap: [AppComponent]
})

export class AppModule { }
