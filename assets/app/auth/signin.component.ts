import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { User } from "./user.model";
@Component({
    selector: 'app-signup',
    templateUrl: './signin.component.html'
})
export class SigninComponent{
    myForm: FormGroup;
    constructor(private authService: AuthService, private router: Router) {}
    ngOnInit(){
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[^@\s]+@[^@\s]+\.[^@\s]+")
            ]),
            password: new FormControl(null, Validators.required)
        });
    }
    onSubmit(){
        const user = new User(this.myForm.value.email,this.myForm.value.password);
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                    console.log('try');
                },
                error => {
                    error => console.error(error)
                }
            );
        this.myForm.reset();
    }
}