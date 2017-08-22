import './polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from "./app.module";
import { GynecapGrossesseModule } from "./gynecapgrossesse.module";
import { GynecapConceptionModule } from "./gynecapconception.module";
import { GynecapAllaitementModule } from "./gynecapallaitement.module";

platformBrowserDynamic().bootstrapModule(GynecapAllaitementModule);
platformBrowserDynamic().bootstrapModule(GynecapConceptionModule);
platformBrowserDynamic().bootstrapModule(GynecapGrossesseModule);
platformBrowserDynamic().bootstrapModule(AppModule);
