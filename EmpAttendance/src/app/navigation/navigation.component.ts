import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Validator,FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Ilogin } from '../shared/model/Ilogin';
import {UserRegx} from '../shared/validations';
import { Users } from '../shared/user.services';
import {CanActivate,Router} from '@angular/router';
import { Observable } from 'rxjs';
import {IUser} from '../shared/model/users';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public Login:any=FormGroup;
 Logindata:any;
 user:IUser={}; 
 model:any={};
 Userdata!:Object;
 dataarray:any;
 Uname:any;
 Role:any;

  constructor(private fb:FormBuilder,private http:HttpClient, public userservice:Users,
    private router:Router,private toast:ToastrService) {
      this.user =JSON.parse(localStorage.getItem('user')!); 
      console.log(this.user);
      this.dataarray=this.user;         
     
      for (let x in this.dataarray) {
           this.Logindata= this.dataarray[x];
        }
        this.Uname=this.Logindata.Name;
        this.Role=this.Logindata.Role;
     }

  ngOnInit(): void {
    this.Login=this.fb.group({     
      'Username':['',[Validators.required,Validators.minLength(5)]],
      'Password':['',[Validators.required,UserRegx.password]]          
  })
  }

  login():void
  {
    
      
      let valid:boolean=false;
    
      var size=Object.keys(this.model).length;      
         if(size>0)
          {
              valid=true;
          }       

     if(valid)
      {
        this.userservice.Login(this.model).subscribe((response:IUser) =>{            
         debugger;  
          
       
          if(response!=null)
          {
             this.toast.success("login successful");         
        }   
          else{
            this.toast.error("login not successful"); 
          } 
           
      },error =>{ 
        this.toast.error(error.error);    
        
      })}

      else
      {
        this.toast.error("Please enter username and password");
      }
      
      
  }

  Logout():void
  {    
    this.userservice.Logout();
    this.router.navigateByUrl('/');
    
  }



}
