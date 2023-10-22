import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { DialogModule } from 'src/share/modules/dialog/dialog.module';
import { AddScheduleComponent } from './components/add-schedule/add-schedule.component';


@NgModule({
  declarations: [
    TimerComponent,
    AddScheduleComponent
  ],
  imports: [
    CommonModule,
    TimerRoutingModule,
    DialogModule,
  ],
})
export class TimerModule { }
