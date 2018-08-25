import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { MarkdownModule } from 'ngx-markdown';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    SharedModule,
    RouterModule.forRoot([]),
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
