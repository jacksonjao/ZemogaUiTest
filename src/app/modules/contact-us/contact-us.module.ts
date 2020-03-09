import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import {CONTACT_US_ROUTING} from './contact-us.routing';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    CONTACT_US_ROUTING
  ]
})
export class ContactUsModule { }
