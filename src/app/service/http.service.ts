import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) { }

  addPost = (url: any, data: any) => {   
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    } 
      return this.http.post(url, data, options)
  }
  getEmpData = (url:any) =>{
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    } 
      return this.http.get(url, options)
  }
  delete = (url:any) =>{
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    } 
    return this.http.delete(url, options)
  }

}
