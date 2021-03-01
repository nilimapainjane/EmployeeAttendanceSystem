import {Injectable} from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {Ilogin} from './model/Ilogin';
import{IEmployee} from './model/IEmployee';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import {isEmpty, map} from 'rxjs/operators';
import { SubjectSubscriber } from 'rxjs/internal/Subject';
import {IUser} from './model/users'




@Injectable({
    providedIn:'root'
})

export class Users{

    public userEndpoint:string ="http://localhost:52348/api/Employee/Login";
    //public allEmpEndpoint:string="http://localhost:52348/api/Employee/GetEmployees";
    public allEmpEndpoint:string="https://localhost:44328/api/Employee/GetEmployee";
    public EmpAttendancelist:string="https://localhost:44328/api/Employee/GetTodayAttendance";
    public header:HttpHeaders;
     private currctUserSourse= new ReplaySubject<IUser>(1);
    currentUser$ = this.currctUserSourse.asObservable(); 

    constructor(private http:HttpClient) {  
      
        this.header=new HttpHeaders({'Content-Type': 'application/json'})
    }

    Login(model:Ilogin)
    {           
       return this.http.get<Ilogin>('https://localhost:44328/api/Employee/Login?Username='+model.Username+'&Password='+model.Password,{
            headers:new HttpHeaders({'Content-Type': 'application/json'})
        }).pipe(map((response:IUser) =>{             
          const user=response;

          if(user)
          {
              localStorage.setItem('user',JSON.stringify(user));
              this.currctUserSourse.next(user);     
          }
          return user;
        }))   
        
    }

    AddEmployee(model:IEmployee)
    {
        debugger;
        return this.http.post<IEmployee>('https://localhost:44328/api/Employee/AddEmployee',   
        JSON.stringify(model),{headers:this.header})
        
    }

    SetCurrentUser(user:IUser)
    {
        this.currctUserSourse.next(user);
    }

    Logout()
    {             

       localStorage.removeItem('user');
       localStorage.clear();
       //this.currctUserSourse.next(null);
       this.currctUserSourse.next();
      // this.currctUserSourse.asObservable().pipe(skipWhile(project => project === null || project === undefined));
      
    }

    GetAllEmployee():Observable<IEmployee[]>
    {        
        return this.http.get<IEmployee[]>(this.allEmpEndpoint);
    }

    GetEmployeeAttendance():Observable<IEmployee[]> 
    {
        debugger;
        return this.http.get<IEmployee[]>(this.EmpAttendancelist);
    }


    // userLogin(item:Ilogin)
    // {
    //     debugger;       
    //     //return this.http.post(this.userEndpoint,JSON.stringify(item),{headers:this.header});
    //     return this.http.post(this.userEndpoint,item);
    // }

  

}

