import {RouterModule, Routes} from '@angular/router';
import {TermsAndConditionsComponent} from './pages/terms-and-conditions/terms-and-conditions.component';

const ROUTES: Routes = [
  {path: '', component: TermsAndConditionsComponent},
];

export const TERMS_AND_CONDITIONS_ROUTING = RouterModule.forChild(ROUTES);
