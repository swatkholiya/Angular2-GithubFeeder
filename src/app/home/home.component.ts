import { Component, OnInit ,OnDestroy} from '@angular/core';
import { GithubUserService } from './../github-user.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {
  users: Observable<any>;

  constructor(private _githubUserService: GithubUserService, private router: Router) {console.log("home constructor clled..."); }

  ngOnInit() {
    console.log("home nhonit..")
    this.initializeUsers();
  }

  initializeUsers() {
    this._githubUserService.getUsers()
      .subscribe(users => this.users = users);
  }
    ngOnDestroy(){
console.log("Destroed home");
}
  

}
