import { Component, OnInit } from '@angular/core';
import {User} from "src/app/components/user";

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.less']
})
export class BindComponent implements OnInit {
userModel = new User("Mihai",  "mihai@test", 2121555, "Angular", true);
  topics: string[]= ["Angular","React","Vue"];

  constructor() { }

  ngOnInit(): void {
  }

}
