import {RouterModule, Routes} from '@angular/router';
import {PastTrialsComponent} from './pages/past-trials/past-trials.component';

const ROUTES: Routes = [
  {path: '', component: PastTrialsComponent},
];

export const PAST_TRIALS_ROUTING = RouterModule.forChild(ROUTES);
