import { Component, OnInit } from '@angular/core';
import { Ilogin } from './shared/model/Ilogin';
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
    debugger;
    this.SetCurrentUser();

  }

  SetCurrentUser()
  {
    const user:Ilogin=JSON.parse(localStorage.getItem('user')!);
    this.userService.SetCurrentUser(user);   
  }
}



