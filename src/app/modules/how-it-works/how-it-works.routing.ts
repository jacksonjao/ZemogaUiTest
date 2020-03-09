import {RouterModule, Routes} from '@angular/router';
import {HowItWorksComponent} from './pages/how-it-works/how-it-works.component';

const ROUTES: Routes = [
  {path: '', component: HowItWorksComponent},
];

export const HOW_IT_WORKS_ROUTING = RouterModule.forChild(ROUTES);
