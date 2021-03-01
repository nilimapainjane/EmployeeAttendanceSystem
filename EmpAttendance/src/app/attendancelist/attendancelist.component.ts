import { Component, OnInit } from '@angular/core';
import{Users} from '../shared/user.services';
import{SearchPipe,SortByPipe} from '../shared/search.pipe'

@Component({
  selector: 'app-attendancelist',
  templateUrl: './attendancelist.component.html',
  styleUrls: ['./attendancelist.component.css']
})
export class AttendancelistComponent implements OnInit {

  public EmpAttenanceData:any;
  FirstName:any;
  todayDate:any = new Date();

  constructor(private userservice:Users) { }

  ngOnInit(): void {
    this.userservice.GetEmployeeAttendance()
    .subscribe(data=>{this.EmpAttenanceData=data;
      console.log(data);
    });
  }

}
