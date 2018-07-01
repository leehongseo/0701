import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule, MatMenuModule} from '@angular/material';

import  {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectComponent } from './direct/direct.component'; 
import { ErrorComponent } from './error/error.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { BROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser/src/browser';
import { HomeComponent } from './home/home.component';
import { InputComponent } from './input/input.component';
import { UserComponent } from './user/user.component';
import {RouterModule} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http'; 
import { JoinComponent } from './join/join.component';
import { PromiseComponent } from './promise/promise.component';;
import { CompanyComponent } from './company/company.component' 



@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    HeaderComponent,
    FooterComponent,
    DirectComponent,
    ErrorComponent,
    HomeComponent,
    InputComponent,
    UserComponent,
    JoinComponent,
    CompanyComponent,
    PromiseComponent   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'direct',component:DirectComponent},
      {path:'home',component:HomeComponent},
      {path:'event',component:EventComponent},
      {path:'input',component:InputComponent},
      {path:'user',component:UserComponent}, 
      {path:'header',component:HeaderComponent},
      {path:'join',component:JoinComponent},
      {path:'promise',component:PromiseComponent},
      {path:'company',component:CompanyComponent},
      {path:'**',component:ErrorComponent}
    ])
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
