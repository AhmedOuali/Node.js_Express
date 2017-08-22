import { Component } from '@angular/core';

import { ContactService } from "./contact/contact.service";




@Component({
    selector: 'my-accueil',
    templateUrl: './accueil.component.html',
    providers: [ContactService]
    
})
export class AccueilComponent {
  
}