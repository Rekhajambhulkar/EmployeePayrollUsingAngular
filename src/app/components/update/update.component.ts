import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    profile: new FormControl(''),
    gender: new FormControl(''),
    department: new FormControl(''),
    salary: new FormControl(''),
    startdate: new FormControl(''),
    note: new FormControl(''),
  })
  department = ['HR', 'SALES', 'FINANCE', 'ENGINEERING'];
  salary = [10000, 20000, 25000, 30000, 40000, 50000]
  date: any = [];
  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  year = [2019, 2020, 2021, 2022, 2022]
  employees: any = [];
  profile = ['../../../assets/Ellipse -3.png','../../../assets/Ellipse 1.png','../../../assets/Ellipse -8.png','../../../assets/Ellipse -4.png']
  deptt:any = [];
 
  constructor(private router: Router, private route:ActivatedRoute, private userService: UserService, public formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
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
      note: ['',[Validators.required]]
    })
    this.form.controls['gender'].valueChanges.subscribe(
      (selectedValue) => {
        console.log(selectedValue);
        console.log(this.form.value.gender);     
      }
  );  
  this.form.controls['department'].valueChanges.subscribe(
    (selectedValue) =>{
      console.log(selectedValue);
      console.log(this.form.value.department);
    }
  )}

  ngOnInit(): void {
    this.userService.getCurrentData(this.route.snapshot.params.id).subscribe((result:any) =>{
    console.log(result.start);
    this.form = new FormGroup({
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
    this.day();
  }

  get f(){
    return this.form.controls;
  }

  day() {
    let temp = []
    for (let i = 1; i < 31; i++) {
      this.date = temp.push(i)
    }
    this.date = temp;
  }

  onChange(e:any) {
 console.log(e.target.value);   
 this.deptt.push(e.target.value)
  }

  onUpdate = (data:any) =>{
    const d = [];
    d.push(this.form.value.day)
    d.push(this.form.value.month)
    d.push(this.form.value.year);
    console.log(d);
   data.startdate = d;
   data.department = this.deptt;
      this.userService.updateData(this.route.snapshot.params.id, data).subscribe(res =>{
       console.log("Updated SuccessFully", res);
      this.router.navigate(['/dashboard'])
    })
  }
}

