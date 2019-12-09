import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import{AppConst} from './Constants/constant'
import{environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  [x: string]: any;
  private serverPath: string = AppConst.serverPath;
  private sPath: string = AppConst.Path;
  dats:any;


  constructor(private http:HttpClient) { }
  getUser(param){
    console.log(param);
    let url = this.serverPath + param + "?access_token=" + environment.APIKEY;
    console.log(url);

    return this.http.get(url);
  }
  
}
