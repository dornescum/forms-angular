import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  topics: string[]= ["Angular","React","Vue"];
  constructor() { }

  ngOnInit(): void {
  }

}
