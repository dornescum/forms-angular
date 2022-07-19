import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BindComponent} from "src/app/components/bind/bind.component";
import {FormComponent} from "src/app/components/form/form.component";
import {AppComponent} from "src/app/app.component";
import {SimpleComponent} from "src/app/components/simple/simple.component";
import {ReactiveComponent} from "src/app/components/reactive/reactive.component";
import {BuilderComponent} from "src/app/components/builder/builder.component";

const routes: Routes = [
  // {path:'', pathMatch:'full'},
  // {path:'', component: AppComponent},
  {path:'bind', component:BindComponent},
  {path:'form', component: FormComponent},
  {path:'simple', component:SimpleComponent},
  {path:'reactive', component: ReactiveComponent},
  {path:'builder', component:BuilderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
