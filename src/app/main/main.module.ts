import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainContainerComponent } from './main-container/main-container.component';
import { MainHeaderComponent } from './main-header/main-header.component';


@NgModule({
  declarations: [
    MainContainerComponent,
    MainHeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
