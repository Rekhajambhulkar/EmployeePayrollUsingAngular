import { Component, OnInit } from '@angular/core';
import { UserService} from '../../service/user.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employee:any = [];

  constructor( private userService: UserService, private route: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.userService.getEmp().subscribe(res =>{
      console.log("res is", res)
      this.employee = res;
    })
  }

}
