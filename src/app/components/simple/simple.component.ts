import {Component, OnInit} from '@angular/core';
import {EnrollmentService} from "src/app/services/enrollment.service";
import {ApiService} from "src/app/services/api.service";
import {tick} from "@angular/core/testing";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-simple', templateUrl: './simple.component.html', styleUrls: ['./simple.component.less']
})
export class SimpleComponent implements OnInit {
  // userName:string= '';
  // email:string = '';
  info: any = {userName: "", email: ""}
  allData: any[] = [];

  constructor(private enrollmentService: EnrollmentService, private getApi: ApiService) {
  }

  ngOnInit(): void {
  }

  sendInfo() {
    // console.log("name :  ", this.userName)
    // console.log("email: ", this.email)
    // console.log(this.info.userName)
    // console.log(this.info.email)
    // console.log(this.info)
    this.enrollmentService.enroll(this.info).subscribe((data:{}) => {
      try {
        console.log(data)
        this.info.userName = ''
        this.info.email = ''
      } catch (err) {
        console.log(err)
      }
    })
  }

  getInfo() {
    this.getApi.getTable().subscribe(info => {
      // console.log(JSON.stringify(info.data))
      this.allData = info.data;
      // this.allData.forEach(item => {
      //   console.log(JSON.stringify(item))
      // })
    })
    // console.log(this.allData)
  }
}
