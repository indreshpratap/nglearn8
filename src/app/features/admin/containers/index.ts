import { AdmDashboardComponent } from './adm-dashboard.comonent';
import { Routes } from '@angular/router';
import { AdmUserRegistrationComponent } from './adm-user-registration/adm-user-registration.component';
import { AdmChaptersComponent } from './adm-chapters/adm-chapters.component';

export const containers = [
  AdmDashboardComponent,
  AdmUserRegistrationComponent,
  AdmChaptersComponent
];

export const routes: Routes = [
  { path: 'dashboard', component: AdmDashboardComponent },
  { path: 'user-registration', component: AdmUserRegistrationComponent },
  { path: 'chapters', component: AdmChaptersComponent }
];
