import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormBindComponent } from './components/form-bind/form-bind.component';
import { BindComponent } from './components/bind/bind.component';
import { FormComponent } from './components/form/form.component';
import { SimpleComponent } from './components/simple/simple.component';
import { NavbarComponent } from './components/UI/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    // FormBindComponent,
    BindComponent,
    FormComponent,
    SimpleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
