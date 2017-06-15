import { User } from "./user.model";
import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/Rx';

@Injectable() //To inject sevice to an other service
export class AuthService{
    constructor(private http: Http){}
    
    signup(user: User){
        const body = JSON.stringify(user);
        const headers= new Headers({'content-type': 'application/json'}); // setting up the content-type because it text/plain as default value
        console.log(body);
        return this.http.post('https://nodejs-angular-xcapo32.c9users.io/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json())); //To like map for the success case , this allows to handel errors ,,,, we added (Observable) because catch() operator dont return Observable object
    }
    
    signin(user: User){
        const body = JSON.stringify(user);
        const headers= new Headers({'content-type': 'application/json'}); // setting up the content-type because it text/plain as default value
        console.log(body);
        const token = localStorage.getItem('token') 
            ? '?token=' +localStorage.getItem('token') //if localStorage.getItem(token) != null
            : '';                                     //if localStorage.getItem(token) == null

        return this.http.post('https://nodejs-angular-xcapo32.c9users.io/user/signin' + token, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json())); //To like map for the success case , this allows to handel errors ,,,, we added (Observable) because catch() operator dont return Observable object
    }
    
    logout() {
        localStorage.clear();
    }
    
    isLogedIn() {
        return localStorage.getItem('token') != null;
    }
}