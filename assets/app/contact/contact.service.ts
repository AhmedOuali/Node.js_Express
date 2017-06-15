import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core"; //Injection of Http service
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { Message } from "./contact.model";
import { ErrorService } from "../errors/error.service";

@Injectable()  //injection of Http service
export class ContactService{
    constructor(
        private http: Http,
        private errorService: ErrorService){} //injection of Http Service
    addMessage(message: Message){
        const body = JSON.stringify(message); //convert javascript object to JSON String
        const headers= new Headers({'content-type': 'application/json'}); // setting up the content-type because it text/plain as default value                                   //if localStorage.getItem(token) == null
        return this.http.post('https://gynecap-project-xcapo32.c9users.io/contact',body, {headers: headers}) // Prepere the soq of observable object
            .map((response: Response) => {
                const result = response.json();
                this.errorService.handleError({title: response.json().title, text: response.json().message, type: 'success'})//creating an alert error;
                return message;
            }) //it allows to tronsform data once it coms back from the server
            .catch((error: Response) => {
                
                this.errorService.handleError({title: error.json().title, text: error.json().message, type: 'error'})//creating an alert error;
                return Observable.throw(error.json())
            }); //To like map for the success case , this allows to handel errors ,,,, we added (Observable) because catch() operator dont return Observable object
    }
}