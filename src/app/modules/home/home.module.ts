import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './pages/home/home.component';
import {HOME_ROUTING} from './home.routing';
import { MainCardComponent } from './components/main-card/main-card.component';
import { MainComponent } from './components/main/main.component';
import { RulingsCardComponent } from './components/rulings-card/rulings-card.component';
import {HomeService} from './home.service';

@NgModule({
  declarations: [HomeComponent, MainCardComponent, MainComponent, RulingsCardComponent],
  imports: [
    CommonModule,
    HOME_ROUTING
  ],
  providers: [HomeService]
})
export class HomeModule { }
