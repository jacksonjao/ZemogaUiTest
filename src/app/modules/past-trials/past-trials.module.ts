import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PAST_TRIALS_ROUTING} from './past-trials.routing';
import {PastTrialsComponent} from './pages/past-trials/past-trials.component';

@NgModule({
  declarations: [PastTrialsComponent],
  imports: [
    CommonModule,
    PAST_TRIALS_ROUTING
  ]
})
export class PastTrialsModule { }
