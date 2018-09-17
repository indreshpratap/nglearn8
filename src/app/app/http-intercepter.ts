import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
     //   console.log(req.url);
        // let authReq;
        // if(/login/.test(req.url)){
        //     authReq = req.clone();
        // }else {
         let   authReq = req.clone({withCredentials:true});
        // }
       
        return next.handle(authReq);
    }
}