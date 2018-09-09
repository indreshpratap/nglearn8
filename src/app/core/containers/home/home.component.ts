import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../app/data.service';
import { Router } from '@angular/router';
import { Storage } from '../../../shared/storage.helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoggedIn = false;
  constructor(private router: Router, private ds: DataService) { }

  ngOnInit() {
    this.isLoggedIn = Storage.isLoggedIn();
    if (this.isLoggedIn === false) {
      this.router.navigate(['login']);
    }
  }

}
