import {RouterModule, Routes} from '@angular/router';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';

const ROUTES: Routes = [
  {path: '', component: ContactUsComponent},
];

export const CONTACT_US_ROUTING = RouterModule.forChild(ROUTES);
