import {RouterModule, Routes} from '@angular/router';
import {PrivacyPolicyComponent} from './pages/privacy-policy/privacy-policy.component';

const ROUTES: Routes = [
  {path: '', component: PrivacyPolicyComponent},
];

export const PRIVACY_POLICY_ROUTING = RouterModule.forChild(ROUTES);
