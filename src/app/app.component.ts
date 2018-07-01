import { Component, ViewChild, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit {
  

  title = 'app';
  addmore = false;
  // by using template variable
  // @ViewChild('myheader') header:HeaderComponent;
  @ViewChild(HeaderComponent) header: HeaderComponent;

  @ViewChildren(HeaderComponent) allHeaders: QueryList<HeaderComponent>;

  ngOnInit(): void {
    // console.log("Single header ", this.header);
    // console.log('got ref of header component', this.header.sayHello());
    // console.log("All headers", this.allHeaders);

    
  }

  ngAfterViewInit(): void {
    console.log("Single header ", this.header);
    console.log('got ref of header component', this.header.sayHello());
    console.log("Afterviewinit All headers", this.allHeaders);
    this.allHeaders.changes.subscribe(data=>console.log("Changed",data));
  }


  showmore(){
    this.addmore = true;
  //  console.log(this.allHeaders);
  }
}
