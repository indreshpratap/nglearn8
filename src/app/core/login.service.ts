import { HttpClient } from "@angular/common/http";
import { getUrl } from '../shared/util';
import { ApiResponse } from "../app/api.response";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) {}

    doLogin(data) {
        return this.http.post<ApiResponse>(getUrl("login"), data);
    }

    afterLogin(data) {
        console.log("Logged in ", data);
    }

    doLogout() {
        return this.http.get<ApiResponse>(getUrl("logout"));
    }
}