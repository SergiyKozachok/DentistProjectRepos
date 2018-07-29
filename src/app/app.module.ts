import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { LogUpFormComponent } from './log-up-form/log-up-form.component';
import { IndexOfSiteComponent } from './index-of-site/index-of-site.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeForDentistComponent } from './Pages/Dentist/home-for-dentist/home-for-dentist.component';
import { HomeForPatientComponent } from './Pages/Patient/home-for-patient/home-for-patient.component';
import { HomeForInternComponent } from './Pages/Intern/home-for-intern/home-for-intern.component';
import { HomeForNurseComponent } from './Pages/Nurse/home-for-nurse/home-for-nurse.component';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { ForNurseGuard } from './guards/guard-for-nurse.guard';
import { ForInternGuard } from './guards/guard-for-intern.guard';
import { ForPatientGuard } from './guards/guard-for-patient.guard';
import { ForDentistGuard } from './guards/guard-for-dentist.guard';
import { MatButtonModule, MatCheckboxModule, MatTableModule  } from '@angular/material';
import {ForAdminGuard} from './guards/guard-for-admin.guard';
import { FirstSubcategoryForDentistComponent } from './Pages/Dentist/first-subcategory-for-dentist/first-subcategory-for-dentist.component';
import { SecondSubcategoryForDentistComponent } from './Pages/Dentist/second-subcategory-for-dentist/second-subcategory-for-dentist.component';
import { SecondSubcategoryForPatientComponent } from './Pages/Patient/second-subcategory-for-patient/second-subcategory-for-patient.component';
import { FirstSubcategoryForPatientComponent } from './Pages/Patient/first-subcategory-for-patient/first-subcategory-for-patient.component';
import { FirstSubcategoryForNurseComponent } from './Pages/Nurse/first-subcategory-for-nurse/first-subcategory-for-nurse.component';
import { SecondSubcategoryForNurseComponent } from './Pages/Nurse/second-subcategory-for-nurse/second-subcategory-for-nurse.component';
import { SecondSubcategoryForInternComponent } from './Pages/Intern/second-subcategory-for-intern/second-subcategory-for-intern.component';
import { FirstSubcategoryForInternComponent } from './Pages/Intern/first-subcategory-for-intern/first-subcategory-for-intern.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', canActivate: [], component: IndexOfSiteComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'logup', component: LogUpFormComponent },

  // Dentist
  { path: 'home-for-dentist', canActivate: [ForDentistGuard], component: HomeForDentistComponent },
  { path: 'home-for-dentist/:first-subcategory-for-dentist', canActivate: [ForDentistGuard, ForAdminGuard], component: FirstSubcategoryForDentistComponent},
  { path: 'home-for-dentist/:second-subcategory-for-dentist', canActivate: [ForDentistGuard, ForAdminGuard], component: SecondSubcategoryForDentistComponent},

  // Patient
  { path: 'home-for-patient', canActivate: [ForPatientGuard], component: HomeForPatientComponent },
  { path: 'home-for-patient/:first-subcategory-for-patient', canActivate: [ForPatientGuard, ForAdminGuard], component: FirstSubcategoryForPatientComponent},
  { path: 'home-for-patient/:second-subcategory-for-patient', canActivate: [ForPatientGuard, ForAdminGuard], component: SecondSubcategoryForPatientComponent},

  // Nurse
  { path: 'home-for-nurse', canActivate: [ForNurseGuard], component: HomeForNurseComponent },
  { path: 'home-for-nurse/:first-subcategory-for-nurse', canActivate: [ForNurseGuard, ForAdminGuard], component: FirstSubcategoryForNurseComponent},
  { path: 'home-for-nurse/:second-subcategory-for-nurse', canActivate: [ForNurseGuard, ForAdminGuard], component: SecondSubcategoryForNurseComponent},

  // Intern
  { path: 'home-for-intern', canActivate: [ForInternGuard], component: HomeForInternComponent },
  { path: 'home-for-intern/:first-subcategory-for-intern', canActivate: [ForInternGuard, ForAdminGuard], component: FirstSubcategoryForInternComponent},
  { path: 'home-for-intern/:second-subcategory-for-intern', canActivate: [ForInternGuard, ForAdminGuard], component: SecondSubcategoryForInternComponent},

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
    HomeForNurseComponent,
    FirstSubcategoryForDentistComponent,
    SecondSubcategoryForDentistComponent,
    SecondSubcategoryForPatientComponent,
    FirstSubcategoryForPatientComponent,
    FirstSubcategoryForNurseComponent,
    SecondSubcategoryForNurseComponent,
    SecondSubcategoryForInternComponent,
    FirstSubcategoryForInternComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
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
