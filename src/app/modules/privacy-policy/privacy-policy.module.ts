import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import {PRIVACY_POLICY_ROUTING} from './privacy-policy.routing';

@NgModule({
  declarations: [PrivacyPolicyComponent],
  imports: [
    CommonModule,
    PRIVACY_POLICY_ROUTING
  ]
})
export class PrivacyPolicyModule { }
