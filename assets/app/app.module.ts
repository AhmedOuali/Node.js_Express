import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
// import { MessageComponent } from "./messages/message.component";
// import { MessageListComponent } from "./messages/message-list.component";
// import { MessageInputComponent } from "./messages/message-input.component";
// import { MessagesComponent } from "./messages/messages.component";
import { AboutComponent } from "./about/about.component";
import { BibliographieComponent } from "./bibliographie/bibliographie.component";
import { ContactComponent } from "./contact/contact.component";
import { ProduitsComponent } from "./produits/produits.component";
import { SocialComponent } from "./social/social.component";
import { TemoignagesComponent } from "./temoignages/temoignages.component";
import { FooterComponent } from "./footer.component";
import { ErrorService } from "./errors/error.service";
import { ErrorComponent } from "./errors/error.component";
import { HeaderComponent } from "./header.component";
import { HomeComponent } from "./home/home.component";
import { HttpModule } from "@angular/http";
import 'hammerjs';

@NgModule({
    declarations: [
        AppComponent,
        // MessagesComponent,
        // MessageComponent,
        // MessageListComponent,
        // MessageInputComponent,
        HeaderComponent,
        AboutComponent,
        BibliographieComponent,
        ContactComponent,
        ProduitsComponent,
        SocialComponent,
        ErrorComponent,
        TemoignagesComponent,
        FooterComponent,
        HomeComponent
    ],
    providers: [ErrorService],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
 
}