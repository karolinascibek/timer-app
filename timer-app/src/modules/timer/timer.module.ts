import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimerRoutingModule } from './timer-routing.module';
import { TimerComponent } from './timer.component';
import { DialogModule } from 'src/share/modules/dialog/dialog.module';
import { AddScheduleComponent } from './components/add-schedule/add-schedule.component';
import { MatButtonModule } from '@angular/material/button';
import { FormModule } from 'src/share/modules/form/form.module';
import { ScheduleItemComponent } from './components/schedule-item/schedule-item.component';


@NgModule({
  declarations: [
    TimerComponent,
    AddScheduleComponent,
    ScheduleItemComponent
  ],
  imports: [
    CommonModule,
    TimerRoutingModule,
    DialogModule,
    MatButtonModule,
    FormModule
  ],
})
export class TimerModule { }
