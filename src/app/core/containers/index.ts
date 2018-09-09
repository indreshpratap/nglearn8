import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { AdminAuthGuard, CanDeactivateGuard } from '../../shared/guards';

export const containers = [
    LoginComponent,
    HomeComponent,
    IntroductionComponent
];


export const routes: Routes = [
    {
        path: '', component: HomeComponent,canDeactivate:[CanDeactivateGuard], children: [
            { path: "intro", component: IntroductionComponent },
            // lazy routing
            { path: 'admin',canActivateChild:[AdminAuthGuard], loadChildren: 'app/features/admin/admin.module#AdminModule' },
            { path: 'student', loadChildren: 'app/features/student/student.module#StudentModule' }

        ]
    },
    { path: 'login', component: LoginComponent },
    { path: '**', redirectTo:"login",pathMatch:"full" },

];

