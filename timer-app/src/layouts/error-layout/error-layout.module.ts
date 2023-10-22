import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorLayoutComponent } from './error-layout.component';
import { ErrorLayoutRoutingModule } from './error-layout-routing.module';



@NgModule({
  declarations: [
    ErrorLayoutComponent
  ],
  imports: [
    CommonModule,
    ErrorLayoutRoutingModule
  ]
})
export class ErrorLayoutModule { }
