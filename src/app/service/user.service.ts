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
  getEmp(){
    return this.http.getEmpData(this.BaseUrl);
  }
  getCurrentData =(id:number) =>{
    return this.http.getEmpData(`${this.BaseUrl}/${id}`)
  }
  deleteData(id:string){
    return this.http.delete(`${this.BaseUrl}/${id}`);
  }

}
