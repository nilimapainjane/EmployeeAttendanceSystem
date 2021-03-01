import { Component, OnInit } from '@angular/core';
import{Users} from '../shared/user.services';
import{SearchPipe,SortByPipe} from '../shared/search.pipe'

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  public Allempdata:any;
  //public model=new Search();
 
  FirstName:any;
  aa:boolean=false;
  constructor( private userservice:Users) { 

  }

  ngOnInit(): void {

    this.userservice.GetAllEmployee()
    .subscribe(data=>{this.Allempdata=data;
      console.log(data);
    });

  }

  setIndex(ii:any){
    this.aa=ii;
    console.log
  }

 

}
