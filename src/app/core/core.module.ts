import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoginComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
})
export class CoreModule { }
