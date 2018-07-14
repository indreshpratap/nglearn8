import { AdmDashboardComponent } from "./adm-dashboard.comonent";
import { Routes } from "@angular/router";

export const containers = [
    AdmDashboardComponent
];

export const routes:Routes = [
    {path:'dashboard',component:AdmDashboardComponent},
    
]