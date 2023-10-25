import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTimeComponent } from './components/input-time/input-time.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InputTimeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputTimeComponent
  ]

})
export class FormModule { }
