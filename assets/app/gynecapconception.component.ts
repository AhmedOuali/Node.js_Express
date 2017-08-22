import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

import { ContactService } from "./contact/contact.service";
import { Message } from "./contact/contact.model";



@Component({
    selector: 'gynecap-conception',
    templateUrl: './gynecapconception.component.html',
   styleUrls: ['./bibliographie/bibliographie.component.css'],
    providers: [ContactService]
})
export class GynecapConceptionComponent {
     message: Message;
    constructor(private contactService: ContactService) {}
    onSubmit(form: NgForm){
        
            //Create
            const message = new Message(form.value.name, form.value.email,form.value.subject,form.value.content);
            console.log(message);
            this.contactService.addMessage(message)
                .subscribe(             //pour lancer la requete ajax (post)
                    data => console.log(data),
                    error => console.error(error)
                );
        form.resetForm();
    }
    
    onClear(form: NgForm) {
        this.message = null;
        form.resetForm()
    }
}