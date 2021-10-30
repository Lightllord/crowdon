import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainContainerComponent } from './main-container.component';
import { MainHeaderComponent } from './main-header.component';
import { GlobalSharedModule } from '../shared/global-shared/global-shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { ClientRegistrationModule } from '../auth/client-registration/client-registration.module';


@NgModule({
  declarations: [
    MainContainerComponent,
    MainHeaderComponent
  ],
  imports: [
    GlobalSharedModule,
    MainRoutingModule,
    MatMenuModule,
    MatDialogModule,
    ClientRegistrationModule
  ]
})
export class MainModule {
}
