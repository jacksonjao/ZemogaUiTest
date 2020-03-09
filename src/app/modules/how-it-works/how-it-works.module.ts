import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowItWorksComponent } from './pages/how-it-works/how-it-works.component';
import {HOW_IT_WORKS_ROUTING} from './how-it-works.routing';

@NgModule({
  declarations: [HowItWorksComponent],
  imports: [
    CommonModule,
    HOW_IT_WORKS_ROUTING
  ]
})
export class HowItWorksModule { }
