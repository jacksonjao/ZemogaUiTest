import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './core/authentication/login/login.component';
import {PageNotFoundComponent} from './core/page-not-found/page-not-found.component';

const ROUTES: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: '404', component: PageNotFoundComponent },
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule',
  },
  {
    path: 'past-trials',
    loadChildren: './modules/past-trials/past-trials.module#PastTrialsModule',
  },

  {
    path: 'how-it-works',
    loadChildren: './modules/how-it-works/how-it-works.module#HowItWorksModule',
  },

  {
    path: 'terms-and-conditions',
    loadChildren: './modules/terms-and-conditions/terms-and-conditions.module#TermsAndConditionsModule',
  },
  {
    path: 'privacy-policy',
    loadChildren: './modules/privacy-policy/privacy-policy.module#PrivacyPolicyModule',
  },

  {
    path: 'contact-us',
    loadChildren: './modules/contact-us/contact-us.module#ContactUsModule',
  },
  { path: '**',  redirectTo: '404', pathMatch: 'full' }
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
