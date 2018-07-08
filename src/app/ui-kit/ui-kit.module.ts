import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PRIME_NG } from './primeng';

let IMPORT_EXPORT = [
  CommonModule,
  FormsModule,
  ...PRIME_NG
]
@NgModule({
  imports: IMPORT_EXPORT,
  exports: IMPORT_EXPORT,
  declarations: []
})
export class UiKitModule { }
