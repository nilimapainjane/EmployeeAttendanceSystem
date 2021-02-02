import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{Validator,FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Ilogin } from '../shared/model/Ilogin';
import {UserRegx} from '../shared/validations';
import { Users } from '../shared/user.services';
import {CanActivate,Router} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  public Login:any=FormGroup;

 apidata:any;
 Logindata:any;
 model:any={};

  constructor(private fb:FormBuilder,private http:HttpClient, public userservice:Users,private router:Router) { }

  ngOnInit(): void {
    this.Login=this.fb.group({     
      'Username':['',[Validators.required,Validators.minLength(5)]],
      'Password':['',[Validators.required,UserRegx.password]]          
  })
  }

  login():void
  {
    console.log(this.model);
   
       this.userservice.Login(this.model).subscribe((response:any) =>{
        console.log(response);       
          alert("login successful")
          this.router.navigate(['/home']);
           
       
   },error =>{ console.log(error);}
   )
      
  }

  Logout():void
  {
    this.userservice.Logout();
   
  }



}
