import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { LogUpFormComponent } from './log-up-form/log-up-form.component';
import { IndexOfSiteComponent } from './index-of-site/index-of-site.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeForDentistComponent } from './Pages/home-for-dentist/home-for-dentist.component';
import { HomeForPatientComponent } from './Pages/home-for-patient/home-for-patient.component';
import { HomeForInternComponent } from './Pages/home-for-intern/home-for-intern.component';
import { HomeForNurseComponent } from './Pages/home-for-nurse/home-for-nurse.component';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ForNurseGuard } from './guards/guard-for-nurse.guard';
import { ForInternGuard } from './guards/guard-for-intern.guard';
import { ForPatientGuard } from './guards/guard-for-patient.guard';
import { ForDentistGuard } from './guards/guard-for-dentist.guard';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {ForAdminGuard} from './guards/guard-for-admin.guard';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [], component: IndexOfSiteComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'logup', component: LogUpFormComponent },
  { path: 'home-for-dentist', canActivate: [ForDentistGuard], component: HomeForDentistComponent },
  { path: 'home-for-patient', canActivate: [ForPatientGuard], component: HomeForPatientComponent },
  { path: 'home-for-norse', canActivate: [ForNurseGuard], component: HomeForNurseComponent },
  { path: 'home-for-intern', canActivate: [ForInternGuard], component: HomeForInternComponent },
  { path: '**', redirectTo: 'home' }
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
    HomeForNurseComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [
    UserService,
    ForDentistGuard,
    ForPatientGuard,
    ForNurseGuard,
    ForInternGuard,
    ForAdminGuard,
    MatButtonModule,
    MatCheckboxModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
