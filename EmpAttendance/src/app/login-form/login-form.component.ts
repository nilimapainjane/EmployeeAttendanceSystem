import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{Validator,FormGroup,FormBuilder, Validators} from '@angular/forms';
import { Ilogin } from '../shared/model/Ilogin';
import {UserRegx} from '../shared/validations';
import { Users } from '../shared/user.services';
import {CanActivate,Router} from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {  
public Login:any=FormGroup;
 apidata:any;
 Logindata:any;

public loggedin:boolean=false;
 model:any={};


  constructor(private fb:FormBuilder,private http:HttpClient, private userservice:Users,private router:Router) { }

  ngOnInit(): void {
    this.Login=this.fb.group({     
        'Username':['',[Validators.required,Validators.minLength(5)]],
        'Password':['',[Validators.required,UserRegx.password]]          
    })
    //this.Getapidata();
 
  }

  login():void
  {
    console.log(this.model);
    debugger;
      // this.userservice.Login(this.model).subscribe((response:Ilogin) =>{
        //console.log(response);
        alert("logn successful")
        this.router.navigate(['/employeelist']);
       //this.loggedin=true;
   // })
      
  }





 

}
