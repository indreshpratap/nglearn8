import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { HomeComponent } from '../../core/containers/home/home.component';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<HomeComponent> {
    canDeactivate(
        component: HomeComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):  boolean {
       return confirm("Are you sure want to go away?")
           
        
    }
}