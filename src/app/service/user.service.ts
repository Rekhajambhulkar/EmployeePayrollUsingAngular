import { Injectable } from '@angular/core';
import {HttpService} from '../service/http.service'
import { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BaseUrl = environment.baseUrl;
  constructor(private http: HttpService) { }

  addData(data:any){
    return this.http.addPost(this.BaseUrl, data);
  }
}
