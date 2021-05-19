import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, FormArray, Validators} from '@angular/forms';
import {UserService} from '../../service/user.service'
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  requiredForm = new FormGroup({
    name: new FormControl(''),
    profile: new FormControl(''),
    gender: new FormControl(''),
    department: new FormControl(''),
    salary: new FormControl(''),
    day: new FormControl(''),
    month: new FormControl(''),
    year: new FormControl(''),
    startdate: new FormControl(''),
    note: new FormControl(''),
  })
    department = ['HR', 'SALES', 'FINANCE', 'ENGINEERING', 'OTHERS'];
  salary = [10000, 20000, 25000, 30000, 40000, 50000]
  date: any = [];
  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  year = [2019, 2020, 2021, 2022, 2022]
  employees: any = [];
  profile = ['../../../assets/Ellipse -3.png','../../../assets/Ellipse 1.png','../../../assets/Ellipse -8.png','../../../assets/Ellipse -4.png']
  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: Router, private router:ActivatedRoute) { 
    this.requiredForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      profile:['',[Validators.required]],
      gender: ['', [Validators.required]],
      department: ['',[Validators.required]],
      depmt: this.formBuilder.array([], [Validators.required]),
      salary: ['', [Validators.required]],
      day:['', [Validators.required]],
      month:['', [Validators.required]],
      year:['', [Validators.required]],
      start: this.formBuilder.array([], [Validators.required]),
      note: ['',[Validators.required]]    })
  }

  ngOnInit(): void {
    this.day();
    this.userService.getCurrentData(this.router.snapshot.params.id).subscribe((result:any) =>{
      console.log(result.start);
      this.requiredForm = new FormGroup({
      name: new FormControl(result['name']),
      profile: new FormControl(result.profile),
      gender: new FormControl(result['gender']),
      department: new FormControl(result['department']),
      salary: new FormControl(result['salary']),
      day: new FormControl(result.start[0]),
      month: new FormControl(result.start[1]),
      year: new FormControl(result.start[2]),
      note: new FormControl(result['note']),
        })
      })
  }

  day() {
    let temp = []
    for (let i = 1; i < 31; i++) {
      this.date = temp.push(i)
    }
    this.date = temp;
  }  

  onSubmit = (data:any) =>{
    console.log(data);
    data.department = this.requiredForm.value.depmt;
    console.log(this.requiredForm.value.start);
    data.startdate = this.requiredForm.value.start
    console.log(data);
        this.userService.addData(data).subscribe(res =>{
      console.log("Added Successfully", res);
      this.route.navigate(['/dashboard'])
      })
  }

  onChange(e:any) {
    console.log(this.requiredForm.value);
    const depmt: FormArray = this.requiredForm.get('depmt') as FormArray;
    if (e.target.checked) {
      depmt.push(new FormControl(e.target.value));      
    } else {
       const index = depmt.controls.findIndex(x => x.value === e.target.value);
       depmt.removeAt(index);
    }
  }

  onSelect(e:any){
    const start: FormArray = this.requiredForm.get('start') as FormArray;
    if (e.target) {
      start.push(new FormControl(e.target.value));
    } else {
       const index = start.controls.findIndex(x => x.value === e.target.value);
       start.removeAt(index);
    }
  }
}
