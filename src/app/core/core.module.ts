import { NgModule } from '@angular/core';
import { UiKitModule } from '../ui-kit/ui-kit.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
  UiKitModule,
  SharedModule
  ],
  exports:[LoginComponent],
  declarations: [LoginComponent]
})
export class CoreModule { }
