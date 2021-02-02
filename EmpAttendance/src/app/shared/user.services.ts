import {Injectable} from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {Ilogin} from './model/Ilogin';
import{IEmployee} from './model/IEmployee';
import { Observable, ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { SubjectSubscriber } from 'rxjs/internal/Subject';



@Injectable({
    providedIn:'root'
})

export class Users{

    public userEndpoint:string ="http://localhost:52348/api/Employee/Login";
    public allEmpEndpoint:string="http://localhost:52348/api/Employee/GetEmployees";
    public header:HttpHeaders;
    private currctUserSourse= new ReplaySubject<Ilogin>(1);
    currentUser$= this.currctUserSourse.asObservable();   

    constructor(private http:HttpClient) {  
        this.header=new HttpHeaders({'Content-Type': 'application/json'})
    }

    Login(model:Ilogin)
    {       
        return this.http.post<Ilogin>('http://localhost:52348/api/Employee/Login?Username='+model.Username+'&Password='+model.Password,{
            headers:new HttpHeaders({'Content-Type': 'application/json'})
        }).pipe(map(( response:Ilogin) =>{
          const user=response;
          if(user)
          {
               localStorage.setItem('user',JSON.stringify(user));
               this.currctUserSourse.next(user);
          }
        }))   
        
    }

    SetCurrentUser(user:Ilogin)
    {
        this.currctUserSourse.next(user);
    }

    Logout()
    {
       localStorage.removeItem('user');
       //this.currctUserSourse.next(null);
    }

    GetAllEmployee():Observable<IEmployee[]>
    {
        return this.http.get<IEmployee[]>(this.allEmpEndpoint);
    }


    // userLogin(item:Ilogin)
    // {
    //     debugger;       
    //     //return this.http.post(this.userEndpoint,JSON.stringify(item),{headers:this.header});
    //     return this.http.post(this.userEndpoint,item);
    // }

  

}

