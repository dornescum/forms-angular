import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormBindComponent } from './components/form-bind/form-bind.component';
import { BindComponent } from './components/bind/bind.component';
import { FormComponent } from './components/form/form.component';
import { SimpleComponent } from './components/simple/simple.component';
import { NavbarComponent } from './components/UI/navbar/navbar.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { BuilderComponent } from './components/builder/builder.component';

@NgModule({
  declarations: [
    AppComponent,
    // FormBindComponent,
    BindComponent,
    FormComponent,
    SimpleComponent,
    NavbarComponent,
    ReactiveComponent,
    BuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
