import { Component, OnInit } from '@angular/core';
import { Storage } from '../../../shared/storage.helper';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  name;
  constructor() { }

  ngOnInit() {
    this.name = Storage.getName();
  }

}
