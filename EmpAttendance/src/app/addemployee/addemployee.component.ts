import { Component, OnInit } from '@angular/core';
import { Users } from '../shared/user.services';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  model:any={};
  public displayDate:any;

  constructor(private http:HttpClient, public userservice:Users ,public toastr:ToastrService) 
  { 
    this.model.Dbo=new Date();
  }

 
  ngOnInit(): void {
  }

  AddEmployee()
  {
    debugger;
    console.log(this.model);

//     this.userservice.AddEmployee(this.model).subscribe((response:any) =>{    
      
//       console.log(response);
//       if(response>0)
//       {
//         this.toastr.success("Record Inserted Successfully") 
//       } 
//       else
//       {
//         this.toastr.success("Record Not Inserted Successfully") 
//       }     
        
//  },error =>{ console.log(error);}
//  )
  
}

  Cancel()
  {
    console.log("canceled");
  }

}
