import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employee:any = [];
  constructor( private userService: UserService, private route: Router) { }
 
  ngOnInit(): void {
    this.getData()
  }

  getData(){
    this.userService.getEmp().subscribe(res =>{
      console.log("res is", res)
      this.employee = res;
    })
  }

  onClick(id: any){
    console.log(id);
    this.userService.deleteData(id).subscribe(res =>{
      console.log("deleted successfully", res);   
      this.getData();   
    })
  }

  onUpdate(id:any){
    console.log(id);
    this.userService.getCurrentData(id).subscribe(res =>{
      console.log("get SuccessFully", res);
    })
  }
}
