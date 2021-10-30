import { NgModule } from '@angular/core';
import { GlobalSharedModule } from '../../shared/global-shared/global-shared.module';
import { ClientRegistrationComponent } from './client-registration.component';


@NgModule({
  declarations: [
    ClientRegistrationComponent
  ],
  imports: [
    GlobalSharedModule
  ],
  exports: [
    ClientRegistrationComponent
  ]
})
export class ClientRegistrationModule {
}
