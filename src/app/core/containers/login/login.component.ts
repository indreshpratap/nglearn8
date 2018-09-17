import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login.service';
import { Router } from '@angular/router';
import { Storage } from '../../../shared/storage.helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  filter;
  username = 'admin@gmail.com';

  // dependency injection
  constructor(private router: Router, private loginService: LoginService) {

  }

  ngOnInit() {
    Storage.clearAll();
  }

  doLogin(loginform) {

    // console.log(loginform);
    this.loginService.doLogin(loginform.value).subscribe(res => {
      if (res.status) {
        Storage.storeUserInfo(res.data);
        this.router.navigate([""]);
      }else {
        alert(res.data);
      }
    });
  }

}
