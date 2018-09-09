import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { Storage } from '../storage.helper';


@Injectable()
export class AdminAuthGuard implements CanActivate,CanActivateChild {
    canActivate(): boolean {
        console.log("Checking admin");
        return (Storage.isLoggedIn() && Storage.isAdmin()) ? true : false;
    }

    canActivateChild(): boolean {
        console.log("Checking child");
        return (Storage.isLoggedIn() && Storage.isAdmin()) ? true : false;
    }
}
