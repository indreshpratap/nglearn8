import { NgModule } from '@angular/core';
import { UiKitModule } from '../../ui-kit/ui-kit.module';
import { SharedModule } from '../../shared/shared.module';
import * as fromContainers from './containers';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    UiKitModule,
    SharedModule,
    RouterModule.forChild(fromContainers.studentRoutes)
  ],
  declarations: fromContainers.containers
})
export class StudentModule { }
