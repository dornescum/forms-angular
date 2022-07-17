import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getTable(){
    return this.http.get<any>("http://localhost:3000/enroll")

      .pipe(map((res:any)=>{
        // console.log(res)
        return res;
      }))
  }
}
