import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {getUrl} from '../shared/util';
import { ApiResponse } from "./api.response";

@Injectable()
export class DataService {


    //injecting http client to make http request to urls 
    constructor(private httpClient: HttpClient) {

    }
    doLogin(formData) {
        console.log("Login user with data", formData);
    }
    getSubject() {
        return [
            { id: 1, name: 'Angular' },
            { id: 2, name: 'Node' },
        ]
    }

    // getCourses() {
    //     // returning the Observable for this url
    //     return this.httpClient.get('assets/test.json')
    // }

    getUsers() {
        return this.httpClient.get<ApiResponse>(getUrl("admin/users"))
    }

    getProfile() {
        return this.httpClient.get<ApiResponse>(getUrl("user/profile"))
    }
    getCourses() {
        return this.httpClient.get<ApiResponse>(getUrl("admin/get-courses"))
    }
    getBatch() {
        return this.httpClient.get<ApiResponse>(getUrl("admin/get-batch"))
    }


    saveUser(data) {
        return this.httpClient.post<ApiResponse>(getUrl('admin/register-user'), data);
    }
    saveCourse(data) {
        return this.httpClient.post<ApiResponse>(getUrl('admin/register-course'), data);
    }
    saveBatch(data) {
        return this.httpClient.post<ApiResponse>(getUrl('admin/register-batch'), data);
    }

    saveChapter(data) {
        return this.httpClient.post<ApiResponse>(getUrl('admin/add-chapter'), data);
    }

   
}