import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  department = ['HR', 'SALES', 'FINANCE', 'ENGINEERING', 'OTHERS'];
  salary = [10000, 20000, 25000, 30000, 40000, 50000]
  date: any = [];
  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  year = [2019, 2020, 2021, 2022, 2022]
  employees: any = [];
  profile = ['../../../assets/Ellipse -3.png','../../../assets/Ellipse 1.png','../../../assets/Ellipse -8.png','../../../assets/Ellipse -4.png']
  constructor() { }

  ngOnInit(): void {
  }

  
}
