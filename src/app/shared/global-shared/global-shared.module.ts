import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule
  ]
})
export class GlobalSharedModule {
}
