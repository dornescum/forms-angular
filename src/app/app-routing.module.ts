import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BindComponent} from "src/app/components/bind/bind.component";
import {FormComponent} from "src/app/components/form/form.component";

const routes: Routes = [
  // {path:'', pathMatch:'full'},

  {path:'bind', component:BindComponent},
  {path:'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
