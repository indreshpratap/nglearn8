import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="">
       {{ title }} 
      </a>
  
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  </nav>
    `
    
})
export class HeaderComponent {
   title = "Angular Application V8";
}
