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
 Role:any;
 Username:any;

  constructor(private fb:FormBuilder,private http:HttpClient, public userservice:Users,
    private router:Router,private toast:ToastrService) { }

  ngOnInit(): void {
    this.Login=this.fb.group({     
      'Username':['',[Validators.required,Validators.minLength(5)]],
      'Password':['',[Validators.required,UserRegx.password]]          
  })
  }

  login():void
  {
    debugger;
    console.log(this.model);    
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
            this.user =JSON.parse(localStorage.getItem('user')!);        
         //this.Userdata=JSON.parse(response);  
            alert(Object.values(this.user));
           alert(Object.values(!this.user["Username"]));
          // this.Role=this.Userdata.Role;
           // this.Username=this.Userdata.Name;
          if(response!=null)
          {
             this.toast.success("login successful");         
        }   
          else{
            this.toast.error("login not successful"); 
          } 
            console.log(response); 
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
