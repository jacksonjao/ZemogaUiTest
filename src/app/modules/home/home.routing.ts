import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';

const ROUTES: Routes = [
  {path: '', component: HomeComponent},
];

export const HOME_ROUTING = RouterModule.forChild(ROUTES);
