import { NgModule } from '@angular/core';

import { CanDeactivateGuard ,AdminAuthGuard} from './guards';

@NgModule({
  imports: [
   
  ],
  declarations: [],
  providers:[AdminAuthGuard,CanDeactivateGuard]
})
export class SharedModule { }
