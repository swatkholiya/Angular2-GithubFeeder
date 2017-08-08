import { Component, OnInit } from '@angular/core';
import { GithubUserService } from './../github-user.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: Observable<any>;

  constructor(private _githubUserService: GithubUserService, private router: Router) { }

  ngOnInit() {
    this.initializeUsers();
  }

  initializeUsers(){
     this._githubUserService.getUsers()
      .subscribe(users => this.users = users);
  }

}
