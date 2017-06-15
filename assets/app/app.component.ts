import { Component } from '@angular/core';

import { ContactService } from "./contact/contact.service";




@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [ContactService]
    
})
export class AppComponent {
  
}