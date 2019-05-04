import { Routes } from '@angular/router';

//components
import { TopNavComponent } from './navigation/home/top-nav/top-nav.component';
import { FeaturesComponent } from './navigation/home/features/features.component';
import { OffersComponent } from './navigation/home/offers/offers.component';
import { ClientsComponent } from './navigation/home/clients/clients.component';
import { FactsComponent } from './navigation/home/facts/facts.component';
import { ProjectsComponent } from './navigation/home/projects/projects.component';
import { CustomersComponent } from './navigation/home/customers/customers.component';
import { PricingComponent } from './navigation/home/pricing/pricing.component';
import { TeamComponent } from './navigation/home/team/team.component';
import { HomeComponent } from './navigation/home/home.component';
import { ContactsComponent } from './navigation/home/contacts/contacts.component';
import { FooterComponent } from './navigation/home/footer/footer.component';
import { NewsletterComponent } from './navigation/home/newsletter/newsletter.component';
import { AppComponent } from './app.component';



export const appRoutes: Routes = [

{
    path: 'home', component:  HomeComponent,
    children: [{ path: '', component: AppComponent }]
},
{
    path: 'home',
     component:HomeComponent ,
     
            children: [
            { path: '', component: HomeComponent }, 
            {path: 'top-nav', component:  TopNavComponent},
            {path: 'features', component:  FeaturesComponent},
            {path: 'offers', component:  OffersComponent},
            {path: 'news', component:  PricingComponent},
            {path: 'facts', component:  FactsComponent},
            {path: 'projects', component:  ProjectsComponent},
            {path: 'team', component:  TeamComponent},
            {path: 'contacts', component:  ContactsComponent},
            ]
},
{
    path: '', redirectTo: '/home', pathMatch: 'full'
 },

// {
//     path: 'home', component:  AppComponent,
//     children: [{ path: '', component: HomeComponent }]
  
// },

    
//     // {
//     //     path: 'top-nav', component:  HomeComponent,
//     //     children: [{ path: '', component: TopNavComponent }]
      
//     // },

//     {
//         path: 'features', component:  HomeComponent,
//         children: [{ path: '', component: FeaturesComponent  }]
       
//     },

//     {
//         path: 'offers', component:  HomeComponent,
//         children: [{ path: '', component: OffersComponent  }]
//     },
//     {
//         path: 'news', component:  HomeComponent,
//         children: [{ path: '', component: PricingComponent  }]
//     },
//     // {
//     //     path: 'clients', component:  HomeComponent,
//     //     children: [{ path: '', component: ClientsComponent  }]
//     // },
//     {
//         path: 'facts', component:  HomeComponent,
//         children: [{ path: '', component: FactsComponent  }]
//     },
//     {
//         path: 'projects', component:  HomeComponent,
//         children: [{ path: '', component: ProjectsComponent  }]
//     },
//     {
//         path: 'team', component:  HomeComponent,
//         children: [{ path: '', component: TeamComponent  }]
//     },
//     {
//         path: 'contacts', component:  HomeComponent,
//         children: [{ path: '', component: ContactsComponent  }]
//     },
//     {
//            path: '', redirectTo: '/home', pathMatch: 'full'
//     }

//     // {
//     //     path: 'footer', component:  HomeComponent,
//     //     children: [{ path: '', component: FooterComponent  }]
//     // },

//     // {
//     //     path: 'newsletter', component:  HomeComponent,
//     //     children: [{ path: '', component: NewsletterComponent  }]
//     // },
//     // {
//     //     path: '', redirectTo: '/home', pathMatch: 'full'
//     // },


  
];
