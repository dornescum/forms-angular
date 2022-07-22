import { Component, OnInit } from '@angular/core';
import {filter, from, Observable, of} from "rxjs";
import {map, take} from "rxjs/operators";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.less']
})
export class TestComponent implements OnInit {
basic = new Observable ((observer:any) =>{
  observer.next('a');
  observer.next('b');
  observer.complete();
  observer.next('c');
})
  hello =of('hello');
world= from('world');
  source = from([1,2,3,4,5,6,7,8,9,10]);
  modified = this.source.pipe(
      map(n => n*2),
      filter(n=> n>=5),
      take(3) // ia doar prime 3
  )
  constructor() { }

  ngOnInit(): void {
  this.basic.subscribe(el => console.log(el));
  this.hello.subscribe(el => console.log(el));
  this.world.subscribe(el => console.log(el));
  this.modified.subscribe(el => console.log(el));
  }

}
