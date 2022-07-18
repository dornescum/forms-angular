import { Component, OnInit } from '@angular/core';
import {User} from "src/app/components/user";
import {EnrollmentService} from "src/app/services/enrollment.service";

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.less']
})
export class BindComponent implements OnInit {
  userModel = new User("Mihai",  "mihai@test", 2121555, "Angular", true);
  topics: string[]= ["Angular","React","Vue"];

  constructor(private enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }
  onSubmit(ngForm:any){
    console.log(ngForm)
    // console.log(this.userModel)
    // this.enrollmentService.enroll(this.userModel).subscribe((data)=>{
    //   try {
    //     console.log("Succes",data)
    //   } catch (error){
    //     console.log("Error", error)
    //   }
    // })
  }
}
