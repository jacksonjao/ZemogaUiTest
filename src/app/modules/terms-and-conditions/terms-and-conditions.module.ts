import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import {TERMS_AND_CONDITIONS_ROUTING} from './terms-and-conditions.routing';

@NgModule({
  declarations: [TermsAndConditionsComponent],
  imports: [
    CommonModule,
    TERMS_AND_CONDITIONS_ROUTING
  ]
})
export class TermsAndConditionsModule { }
