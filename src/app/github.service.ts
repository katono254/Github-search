import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import{AppConst} from './Constants/constant'
import{environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private serverPath: string = AppConst.serverPath;
  private sPath: string = AppConst.Path;
  dats:any;


  constructor(private http:HttpClient) { }
  
}
