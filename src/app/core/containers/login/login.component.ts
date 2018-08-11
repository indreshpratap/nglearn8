import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  filter;
  username='admin';
  constructor() { }

  ngOnInit() {
  }

  doLogin(loginform){
    // console.log(loginform);
    console.log(loginform.value);
  }

}
