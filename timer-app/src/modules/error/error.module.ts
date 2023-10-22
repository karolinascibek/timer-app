import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageNotFoundComponent } from './components/error-page-not-found/error-page-not-found.component';
import { ErrorRoutingModule } from './error-routing.module';



@NgModule({
  declarations: [
    ErrorPageNotFoundComponent
  ],
  imports: [
    CommonModule,
    ErrorRoutingModule,
  ]
})
export class ErrorModule { }
