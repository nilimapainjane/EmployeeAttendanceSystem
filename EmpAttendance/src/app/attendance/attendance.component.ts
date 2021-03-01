import { Component, OnInit } from '@angular/core';
import { Users } from '../shared/user.services';
import {CanActivate,Router} from '@angular/router';
import { Observable } from 'rxjs';
import {IUser} from '../shared/model/users';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  myDate:any = new Date();
  Logindata:any;
  user:IUser={}; 
  model:any={};
  Userdata!:Object;
  dataarray:any;
  Uname:any;
  Role:any;
  logout:any;
  dt:any;
 
  public absent:boolean=false;



  constructor() {
    this.user =JSON.parse(localStorage.getItem('user')!); 
            console.log(this.user);
            this.dataarray=this.user;         
           
            for (let x in this.dataarray) {
                 this.Logindata= this.dataarray[x];
              }
              this.Uname=this.Logindata.Name;
              this.Role=this.Logindata.Role;             
              
           
             
   }

   attendance()
   {
      this.dt = new Date();
      this.absent=!this.absent;
      this.dt.setHours(this.dt.getHours() + 8 ); 
      
   }
   

  ngOnInit(): void {

  }

}
