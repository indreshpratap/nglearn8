import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DataService {

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

    getCourses() {
        // returning the Observable for this url
      return this.httpClient.get('assets/test.json')
    }
}