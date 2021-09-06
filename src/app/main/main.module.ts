import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainContainerComponent } from './main-container/main-container.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { GlobalSharedModule } from '../shared/global-shared/global-shared.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthSharedModule } from '../auth/auth-shared/auth-shared.module';


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
    AuthSharedModule
  ]
})
export class MainModule {
}
