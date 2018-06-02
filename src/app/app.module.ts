import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { PropertyBindingComponent } from './components/property-binding.component';
import { ProductListingComponent } from './components/products/product-listing.component';
import { ProductCardComponent } from './components/products/product-card.component';


@NgModule({
  declarations: [
    AppComponent, HeaderComponent, PropertyBindingComponent,
    ProductListingComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
