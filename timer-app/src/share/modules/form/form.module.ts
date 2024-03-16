import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTimeComponent } from './components/input-time/input-time.component';
import { FormsModule } from '@angular/forms';
import { InputCalendarComponent } from './components/input-calendar/input-calendar.component';
import { OutlineDirective } from './directives/outline.directive';
import { InputMaskDirective } from './directives/input-mask.directive';
import { IconModule } from 'src/share/icon/icon.module';



@NgModule({
  declarations: [
    InputTimeComponent,
    InputCalendarComponent,
    OutlineDirective,
    InputMaskDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IconModule
  ],
  exports: [
    InputTimeComponent,
    InputCalendarComponent
  ]

})
export class FormModule { }
