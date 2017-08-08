import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubUserService } from './../github-user.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-user-repository',
  templateUrl: './user-repository.component.html',
  styleUrls: ['./user-repository.component.css']
})
export class UserRepositoryComponent implements OnInit {

  userRepoData: Observable<any>;

  constructor(private routeParamService: ActivatedRoute, private githubService: GithubUserService) { }

  ngOnInit() {
    this.initializeUserRepo();
  }

  initializeUserRepo(){
    let name = this.routeParamService.snapshot.params['name'];
    this.githubService.getUserRepository(name).subscribe(userRepoData => this.userRepoData = userRepoData);
  }

}
