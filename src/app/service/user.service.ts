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

  deleteData(id:string){
    return this.http.delete(`${this.BaseUrl}/${id}`);
  }

  updateData(id:number, data:any){
    return this.http.update(`${this.BaseUrl}/${id}`, data);

  }

  getCurrentData =(id:number) =>{
    return this.http.getEmpData(`${this.BaseUrl}/${id}`)
  }
}
