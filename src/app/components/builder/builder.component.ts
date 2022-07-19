import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {EnrollmentService} from "src/app/services/enrollment.service";

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.less']
})
export class BuilderComponent implements OnInit {
  registrationForm =this.fb.group({
    userName : [''],
    password: [''],
    confirmPassword:['']
  })
  constructor(private fb:FormBuilder, private _enrollmentService: EnrollmentService) { }

  ngOnInit(): void {
  }
  sendReactiveForm(){
    console.log()
    this._enrollmentService.registrationBuilder(this.registrationForm).subscribe((data:{}) => {
      try {
        console.log(data)
      } catch (err) {
        console.log(err)
      }
    })
  }

}
