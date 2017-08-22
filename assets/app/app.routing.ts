import { Routes,RouterModule } from "@angular/router";
import { AccueilComponent } from "./accueil.component";
import { GynecapGrossesseComponent } from "./gynecapgrossesse.component";
import { GynecapConceptionComponent } from "./gynecapconception.component";
import { GynecapAllaittementComponent } from "./gynecapallaittement.component";

const APP_ROUTES: Routes= [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: AccueilComponent },
    { path: 'produit/gynecap-conception', component: GynecapGrossesseComponent },
    { path: 'produit/gynecap-grossesse', component:  GynecapGrossesseComponent },
    { path: 'produit/gynecap-allaitement', component: GynecapAllaittementComponent},
    { path: '**', redirectTo: '/home' }
];
export const routing=RouterModule.forRoot(APP_ROUTES);