import { Component, OnInit } from '@angular/core';
import { getAdminMenu, getUserMenu } from '../../menu';
import { Storage } from '../../../shared/storage.helper';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss']
})
export class LeftSideBarComponent implements OnInit {

  currentMenu;

  constructor() { }

  ngOnInit() {
    if(Storage.isAdmin()){
      this.currentMenu = getAdminMenu();
    }else if(Storage.isUser()) {
      this.currentMenu = getUserMenu();
    }
    // this.currentMenu = getUserMenu();
  }
}
