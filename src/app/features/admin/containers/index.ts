import { AdmDashboardComponent } from './adm-dashboard.comonent';
import { Routes } from '@angular/router';
import { AdmUserRegistrationComponent } from './adm-user-registration/adm-user-registration.component';

export const containers = [AdmDashboardComponent, AdmUserRegistrationComponent];

export const routes: Routes = [
  { path: 'dashboard', component: AdmDashboardComponent },
  { path: 'user-registration', component: AdmUserRegistrationComponent }
];
