import {Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
    providedIn:'root'
})

export class Users{

    public userEndpoint:string ="";
    constructor(private http:HttpClient) {  }

    User()
    {
        return this.http.get(this.userEndpoint);
    }

}

