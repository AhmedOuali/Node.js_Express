import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
@Component({
    selector: 'app-authentication',
    template: `
    <header class="row spacing">
        <nav class="col-xs-8 col-xs-offset-2">
            <ul class="nav nav-tabs">
                <li routerLinkActive="active"><a [routerLink]="['signup']">signup</a></li>
                <li routerLinkActive="active" *ngIf="!isLogedIn()"><a [routerLink]="['signin']">signin</a></li>
                <li routerLinkActive="active" *ngIf="isLogedIn()"><a [routerLink]="['logout']">Logout</a></li>
            </ul>
        </nav>
    </header>
    
        <router-outlet></router-outlet>
   
    `
})
export class AuthenticationComponent{
    constructor(private authService: AuthService) {}
    isLogedIn() {
        return this.authService.isLogedIn();
    }
    
}