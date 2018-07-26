import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { LogUpFormComponent } from './log-up-form/log-up-form.component';
import { IndexOfSiteComponent } from './index-of-site/index-of-site.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeForDentistComponent } from './home-for-dentist/home-for-dentist.component';
import { HomeForPatientComponent } from './home-for-patient/home-for-patient.component';
import { HomeForInternComponent } from './home-for-intern/home-for-intern.component';
import { HomeForNorseComponent } from './home-for-norse/home-for-norse.component';
import {UserService} from './user.service';
import {AuthguardGuard} from './authguard.guard';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'logup',
    component: LogUpFormComponent
  },
  {
    path: '',
    component: IndexOfSiteComponent
  },
  {
    path: 'home-for-dentist',
    canActivate: [AuthguardGuard],
    component: HomeForDentistComponent
  },
  {
    path: 'home-for-patient',
    component: HomeForPatientComponent
  },
  {
    path: 'home-for-norse',
    component: HomeForNorseComponent
  },
  {
    path: 'home-for-intern',
    component: HomeForInternComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    LogUpFormComponent,
    IndexOfSiteComponent,
    HomeForDentistComponent,
    HomeForPatientComponent,
    HomeForInternComponent,
    HomeForNorseComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
