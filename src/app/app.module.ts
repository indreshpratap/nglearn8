import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { PropertyBindingComponent } from './components/property-binding.component';
import { ProductListingComponent } from './components/products/product-listing.component';
import { ProductCardComponent } from './components/products/product-card.component';
import { AboutUsComponent } from './components/aboutus.component';
import { HighlightDirective } from './directive/highlight.directive';

const routes: Routes = [
  {path:"",redirectTo:"products",pathMatch:"full" },
  { path: "property-binding", component: PropertyBindingComponent },
  { path: "products", component: ProductListingComponent },
  {path:"aboutus",component:AboutUsComponent}
];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, PropertyBindingComponent,
    ProductListingComponent,
    ProductCardComponent,
    AboutUsComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
