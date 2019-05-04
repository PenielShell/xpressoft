import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './navigation/home/top-nav/top-nav.component';
import { FeaturesComponent } from './navigation/home/features/features.component';
import { OffersComponent } from './navigation/home/offers/offers.component';
import { PricingComponent } from './navigation/home/pricing/pricing.component';
import { ClientsComponent } from './navigation/home/clients/clients.component';
import { FactsComponent } from './navigation/home/facts/facts.component';
import { ProjectsComponent } from './navigation/home/projects/projects.component';
import { CustomersComponent } from './navigation/home/customers/customers.component';

//routes
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { TeamComponent } from './navigation/home/team/team.component';
import { ContactsComponent } from './navigation/home/contacts/contacts.component';
import { HomeComponent } from './navigation/home/home.component';
import { FooterComponent } from './navigation/home/footer/footer.component';
import { NewsletterComponent } from './navigation/home/newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FeaturesComponent,
    OffersComponent,
    PricingComponent,
    ClientsComponent,
    FactsComponent,
    ProjectsComponent,
    CustomersComponent,
    TeamComponent,
    ContactsComponent,
    HomeComponent,
    FooterComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
