import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { ContactsComponent } from './app/contacts/contacts.component';
import { provideRouter, Routes } from '@angular/router';



const routes: Routes = [
  { path: ' ', component: 
  HomeComponent },
  { path: 'contacts', component: 
  ContactsComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});

bootstrapApplication(AppComponent, appConfig, )
  .catch((err) => console.error(err));
