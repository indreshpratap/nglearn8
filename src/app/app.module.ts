import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { PropertyBindingComponent } from './components/property-binding.component';
import { ProductListingComponent } from './components/products/product-listing.component';
import { ProductCardComponent } from './components/products/product-card.component';
import { AboutUsComponent } from './components/aboutus.component';
import { HighlightDirective } from './directive/highlight.directive';
import { YesNoPipe } from './pipe/yesno.pipe';
import { MyjsonPipe } from './pipe/myjson.pipe';
import { TimesPipe } from './pipe/times.pipe';

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
    HighlightDirective,
    YesNoPipe,
    MyjsonPipe,
    TimesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
