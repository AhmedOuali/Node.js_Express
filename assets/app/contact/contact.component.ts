import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { ContactService } from "./contact.service";
import { Message } from "./contact.model";


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent {
    message: Message;
    constructor(private contactService: ContactService) {}
    onSubmit(form: NgForm){
        
        //     //Create
        //     const message = new Message(form.value.name, form.value.email,form.value.subject,form.value.content);
        //     console.log(message);
        //     this.contactService.addMessage(message)
        //         .subscribe(             //pour lancer la requete ajax (post)
        //             data => console.log(data),
        //             error => console.error(error)
        //         );
        // form.resetForm();
    }
    
    onClear(form: NgForm) {
        this.message = null;
        form.resetForm()
    }
}





