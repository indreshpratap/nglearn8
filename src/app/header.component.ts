import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" routerLink="">
       {{ title }} 
      </a>
 <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarExampleTransparentExample" class="navbar-menu">
    <div class="navbar-start">
    <a class="navbar-item" routerLink="property-binding">Property Binding</a>
    <a class="navbar-item" routerLink="products">Products</a>
    <a class="navbar-item" routerLink="aboutus">About Us</a>
      
          </div>
          </div>
  </nav>
    `
    
})
export class HeaderComponent {
   title = "Angular Application V8.1";
}
