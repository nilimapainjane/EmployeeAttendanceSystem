import { Component, OnInit } from '@angular/core';
import{Users} from '../shared/user.services';



@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public Allempdata:any;
  //public model=new Search();
 
  firstName="";
  aa:boolean=false;
  constructor( private userservice:Users) { 

  }

  ngOnInit(): void {
debugger;
    this.userservice.GetAllEmployee()
    .subscribe(data=>{this.Allempdata=data;
    });

  }

  setIndex(ii:any){
    this.aa=ii;
    console.log
  }

 

}
