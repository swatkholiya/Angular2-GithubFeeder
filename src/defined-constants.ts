import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable()
export class DefinedConstants implements OnInit {

    private githubUsersEndpoint: string = 'https://api.github.com/users';

    constructor() { }

    ngOnInit() {}

    public getGithubUsersEndpoint():string {
            return this.githubUsersEndpoint;
    }   
   
}
