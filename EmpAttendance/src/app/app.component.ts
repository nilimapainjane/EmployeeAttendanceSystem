import { Component, OnInit } from '@angular/core';
import { Ilogin } from './shared/model/Ilogin';
import { IUser } from './shared/model/users';
import { Users } from './shared/user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EmpAttendance';

  constructor(private userService:Users)
  {

  }

  ngOnInit()
  {
  
    this.SetCurrentUser();

  }

  SetCurrentUser()
  {
    const user:IUser=JSON.parse(localStorage.getItem('user')!);
    this.userService.SetCurrentUser(user);   
  }
}



