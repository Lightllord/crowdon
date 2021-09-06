import { NgModule } from '@angular/core';
import { AuthDialogComponent } from './auth-dialog/auth-dialog.component';
import { GlobalSharedModule } from '../../shared/global-shared/global-shared.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AuthDialogComponent
  ],
  imports: [
    GlobalSharedModule,
    MatDialogModule
  ],
  exports: [
    MatDialogModule
  ]
})
export class AuthSharedModule {
}
