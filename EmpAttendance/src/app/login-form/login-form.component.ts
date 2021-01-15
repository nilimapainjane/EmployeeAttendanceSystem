import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{Validator,FormGroup,FormBuilder, Validators} from '@angular/forms';
import {UserRegx} from '../shared/validations';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {  
public userLogin:any=FormGroup;
 apidata:any;
  constructor(private fb:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.userLogin=this.fb.group({
      'uname':['',[Validators.required,Validators.minLength(5)]],
      'password':['',[Validators.required,UserRegx.password]]
    })
    this.Getapidata();
 
  }

  Getapidata()
  {
    this.http.get('http://localhost:52348/weatherforecast').subscribe( response => { 
      this.apidata= response; },
      error=> { console.log(error); } )
  }

  Save(data:any){
    console.log(data);
  }

}
