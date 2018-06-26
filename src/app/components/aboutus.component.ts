import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-about',
    template:`
    <h4>About Us</h4>

    `
})
export class AboutUsComponent implements OnInit {
    
    ngOnInit(): void {
    console.log("About us On Init");
    this.ngOnDestroy();
    
    }

    ngOnDestroy(): void {
       console.log("About us destroy");
      // this.ngOnInit();
        
    }


}
