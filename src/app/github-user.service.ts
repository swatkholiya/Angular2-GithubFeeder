import { Injectable , Component } from '@angular/core';
import { Http , Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {DefinedConstants} from '../app.defined.constants';

@Injectable()
export class GithubUserService {

  private _usersurl : string = this.definedConsts.GITHUB_USER_ENDPOINT;
  
  constructor(private _http: Http , private definedConsts : DefinedConstants) { console.log("url = "+this._usersurl)}
  
  getUsers(){
    return this._http.get(this._usersurl)
      .map((response : Response) => response.json());
   }

  getUserByName(name:string){
    return this._http.get(this._usersurl+"/"+name)
    .map((response :Response) => response.json());
  }

  getUserRepository(name:string){
      return this._http.get(this._usersurl+"/"+name+"/repos")
      .map((respone : Response)=> respone.json());

  }

}
