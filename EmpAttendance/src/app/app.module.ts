import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CourseComponent} from './course.component'
import { ContentPipes } from './content.pipes';
import { CustomDirective } from './custom.directives';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router'
import {routes} from './app.routes';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import{FilterPipe} from '../app/shared/filter.pipes';
import {SortByPipe} from '../app/shared/search.pipe';
import {SearchPipe} from '../app/shared/search.pipe';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    ContentPipes,
    CustomDirective,
    LoginFormComponent,
    NavigationComponent,
    HomeComponent,
    EmployeelistComponent,
    AddemployeeComponent,
    FilterPipe,
    SearchPipe,
    SortByPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot(
      {
        timeOut: 10000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,      
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
